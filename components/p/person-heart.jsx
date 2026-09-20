import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrh9d6z6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrh9d6z6a"/>`,
		"fallback": "mdi:person-heart",
	});
}

export default Component;
