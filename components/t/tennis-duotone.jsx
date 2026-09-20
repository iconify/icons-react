import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/txc-6kbgf.css';
import '../../css/p/pn0j4yocx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="txc-6kbgf"/><path class="pn0j4yocx"/></g>`,
		"fallback": "reicon:tennis-duotone",
	});
}

export default Component;
