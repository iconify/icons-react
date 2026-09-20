import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3uc9bcsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3uc9bcsu"/>`,
		"fallback": "keyline-icons:panel-left-fill",
	});
}

export default Component;
