import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eih860bef.css';
import '../../css/t/tn_ex2brk.css';
import '../../css/a/aw3-wq9gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eih860bef"/><path class="tn_ex2brk"/><path class="aw3-wq9gf"/></g>`,
		"fallback": "hugeicons:prawn",
	});
}

export default Component;
