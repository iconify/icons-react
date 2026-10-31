import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-9_rj_3o.css';
import '../../css/b/b6y58ab-k.css';
import '../../css/z/zn07s_brs.css';
import '../../css/i/i8vq9lbvg.css';

const viewBox = {"width":301,"height":225};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c-9_rj_3o"/><path class="b6y58ab-k"/><path class="zn07s_brs"/><path class="i8vq9lbvg"/></g>`,
		"fallback": "cif:pg",
	});
}

export default Component;
