import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj_bjbbzz.css';
import '../../css/q/q6z_ngbhj.css';
import '../../css/o/o57fo9bqu.css';
import '../../css/z/z04drlb1l.css';
import '../../css/k/kbyccgbdg.css';
import '../../css/h/h22dv30tg.css';
import '../../css/j/jk8vg9_ca.css';
import '../../css/j/jdcr3_b_r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj_bjbbzz"/><path class="q6z_ngbhj"/><path class="o57fo9bqu"/><g class="z04drlb1l"><path class="kbyccgbdg"/><path class="h22dv30tg"/><path class="jk8vg9_ca"/><path class="jdcr3_b_r"/></g>`,
		"fallback": "openmoji:tsunami",
	});
}

export default Component;
