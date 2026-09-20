import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_lggdbfm.css';
import '../../css/u/u8onhac_p.css';
import '../../css/t/te_cyf9rd.css';
import '../../css/j/jbwikosqr.css';
import '../../css/j/jxqmr0b1u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j_lggdbfm"/><path class="u8onhac_p"/><path clip-rule="evenodd" class="te_cyf9rd"/><path clip-rule="evenodd" class="jbwikosqr"/><path class="jxqmr0b1u"/></g>`,
		"fallback": "streamline-kameleon-color:tea-cup-duo",
	});
}

export default Component;
