import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkzz6m3te.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkzz6m3te"/>`,
		"fallback": "uil:shield",
	});
}

export default Component;
