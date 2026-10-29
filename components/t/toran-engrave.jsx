import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kdf7u1j_a.css';
import '../../css/e/eur6m_bld.css';
import '../../css/g/gy0k1mf0a.css';
import '../../css/l/lf-l1gbwa.css';
import '../../css/u/u3u6a8b0i.css';
import '../../css/i/iieeedbrs.css';
import '../../css/n/n6y6-qb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kdf7u1j_a wm-k"/><path class="eur6m_bld wm-a"/><path class="gy0k1mf0a wm-shadow"/><path class="lf-l1gbwa wm-k"/><path class="u3u6a8b0i wm-a"/><path class="iieeedbrs wm-k"/><path class="n6y6-qb3g wm-a"/></g>`,
		"fallback": "withicons:toran-engrave",
	});
}

export default Component;
