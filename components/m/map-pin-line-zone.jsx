import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgx717bta.css';
import '../../css/h/hj65d71zd.css';
import '../../css/r/r8p2bpbul.css';
import '../../css/j/jn810acsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 5.98)" class="zgx717bta"/><path class="hj65d71zd"/><circle transform="rotate(90 12 5.98)" class="r8p2bpbul"/><path class="jn810acsl"/></g>`,
		"fallback": "andrsrxn:map-pin-line-zone",
	});
}

export default Component;
