import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y07h1_bub.css';
import '../../css/f/fsyteub4z.css';
import '../../css/d/d062g7bsf.css';
import '../../css/s/sd7d36l-m.css';
import '../../css/u/ugsn5pbhe.css';
import '../../css/n/nh13-x78h.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/nonrk8b8v.css';
import '../../css/a/ax428nxyl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="y07h1_bub"/><path class="fsyteub4z"/><path class="d062g7bsf"/><path class="sd7d36l-m"/><path class="ugsn5pbhe"/><path class="nh13-x78h"/><g class="jn8qy4bru"><path class="nonrk8b8v"/><path class="ax428nxyl"/></g>`,
		"fallback": "openmoji:metro",
	});
}

export default Component;
