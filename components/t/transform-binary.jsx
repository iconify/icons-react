import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7ik_xtrn.css';
import '../../css/w/wx-066bcp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7ik_xtrn"/><path class="wx-066bcp"/>`,
		"fallback": "carbon:transform-binary",
	});
}

export default Component;
