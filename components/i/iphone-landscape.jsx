import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f9_wrwbrn.css';
import '../../css/l/lfcen-bmn.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(3 5)" class="bi12bsetm"><path class="f9_wrwbrn"/><circle class="lfcen-bmn"/></g>`,
		"fallback": "system-uicons:iphone-landscape",
	});
}

export default Component;
