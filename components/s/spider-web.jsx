import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sray-5nea.css';
import '../../css/s/s06jx0j5x.css';
import '../../css/m/mjqou0pnq.css';
import '../../css/z/z3si_635t.css';
import '../../css/b/bzen4ib9m.css';
import '../../css/b/bzlty5c_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="sray-5nea"/><path class="s06jx0j5x"/><path class="mjqou0pnq"/><path class="z3si_635t"/><path class="bzen4ib9m"/><path class="bzlty5c_q"/></g>`,
		"fallback": "xero-emoji:spider-web",
	});
}

export default Component;
