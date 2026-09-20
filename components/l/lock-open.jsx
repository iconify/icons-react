import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y8ol2mkbg.css';
import '../../css/z/zxhjaubkm.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(4 1)" class="bi12bsetm"><path class="y8ol2mkbg"/><circle class="zxhjaubkm"/></g>`,
		"fallback": "system-uicons:lock-open",
	});
}

export default Component;
