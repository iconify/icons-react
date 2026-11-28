import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwaf-qvuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwaf-qvuh"/>`,
		"fallback": "noviair-light:message-square-x",
	});
}

export default Component;
