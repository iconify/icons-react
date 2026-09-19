import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhb8c01ug.css';
import '../../css/l/lumab6baq.css';
import '../../css/t/tng64wbcx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hhb8c01ug"><path class="lumab6baq"/><path class="tng64wbcx"/></g>`,
		"fallback": "catppuccin:lisp",
	});
}

export default Component;
