import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0id9fbfh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0id9fbfh"/>`,
		"fallback": "ix:text",
	});
}

export default Component;
