import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yikm9ubfr.css';
import '../../css/a/a1da0u99y.css';
import '../../css/q/q83po7bsk.css';
import '../../css/p/pwtdgxb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="yikm9ubfr"/><circle class="a1da0u99y"/><path class="q83po7bsk"/><path class="pwtdgxb2n"/></g>`,
		"fallback": "andrsrxn:tuning",
	});
}

export default Component;
