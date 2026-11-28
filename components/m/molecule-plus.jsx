import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxtv4-b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxtv4-b7v"/>`,
		"fallback": "noviair-light:molecule-plus",
	});
}

export default Component;
