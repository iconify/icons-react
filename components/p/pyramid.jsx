import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njsk45-mo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njsk45-mo"/>`,
		"fallback": "tabler:pyramid",
	});
}

export default Component;
