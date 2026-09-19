import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk2hq4bdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sk2hq4bdg"/>`,
		"fallback": "basil:location-plus-solid",
	});
}

export default Component;
