import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l_b5erb4c.css';
import '../../css/y/yl-1i7u7d.css';
import '../../css/u/u_nif7b-i.css';
import '../../css/s/sfp-qh-hh.css';
import '../../css/r/r9h_ffb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="l_b5erb4c"/><path class="yl-1i7u7d"/><path class="u_nif7b-i wm-shine"/><path class="sfp-qh-hh"/><path class="r9h_ffb6a"/></g>`,
		"fallback": "withicons-kawaii:moon",
	});
}

export default Component;
