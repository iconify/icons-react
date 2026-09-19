import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdbl3bnfw.css';
import '../../css/e/e2li34b1z.css';
import '../../css/x/xh-rjd76x.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdbl3bnfw"/><path class="e2li34b1z"/><path class="xh-rjd76x"/>`,
		"fallback": "formkit:textarea",
	});
}

export default Component;
