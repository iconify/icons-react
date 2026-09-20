import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fwfr7jc3g.css';
import '../../css/j/jxwsi6yrn.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1 1)" class="bi12bsetm"><path class="fwfr7jc3g"/><circle class="jxwsi6yrn"/></g>`,
		"fallback": "system-uicons:warning-triangle",
	});
}

export default Component;
