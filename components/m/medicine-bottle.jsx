import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/i/ipf2vu9op.css';
import '../../css/f/fzm2rccme.css';
import '../../css/p/p_61p5bej.css';
import '../../css/b/btj-cobvn.css';
import '../../css/t/t6-8_dbpu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ipf2vu9op"/><path class="fzm2rccme"/><path class="p_61p5bej"/><path class="btj-cobvn"/><path class="t6-8_dbpu"/></g>`,
		"fallback": "icon-park-outline:medicine-bottle",
	});
}

export default Component;
