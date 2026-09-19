import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jovfsq3tv.css';
import '../../css/d/d-hdlvbnx.css';
import '../../css/z/zdoglobqf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="jovfsq3tv"/><path class="d-hdlvbnx"/><path class="zdoglobqf"/></g>`,
		"fallback": "icon-park-outline:onesies",
	});
}

export default Component;
