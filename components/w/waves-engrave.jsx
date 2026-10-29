import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gs4rmbc_b.css';
import '../../css/u/u8506e-ir.css';
import '../../css/f/fvgsbq1kt.css';
import '../../css/g/gwq6sk28r.css';
import '../../css/k/kgbn2cc9v.css';
import '../../css/h/h9urc9bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gs4rmbc_b wm-k"/><path class="u8506e-ir wm-a"/><path class="fvgsbq1kt wm-shadow"/><path class="gwq6sk28r wm-a"/><path class="kgbn2cc9v wm-k"/><path class="h9urc9bth wm-a"/></g>`,
		"fallback": "withicons:waves-engrave",
	});
}

export default Component;
