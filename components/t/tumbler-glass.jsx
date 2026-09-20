import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f10v7ra8f.css';
import '../../css/z/z7sd0d95r.css';
import '../../css/o/owpfkacsr.css';
import '../../css/y/yk700ug_c.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/c/cyf_nebvx.css';
import '../../css/e/eo5m75-is.css';
import '../../css/o/orwotsbei.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f10v7ra8f"/><path class="z7sd0d95r"/><path class="owpfkacsr"/><path class="yk700ug_c"/><g class="doj9dq_jg"><path class="cyf_nebvx"/><path class="eo5m75-is"/><path class="orwotsbei"/></g>`,
		"fallback": "openmoji:tumbler-glass",
	});
}

export default Component;
