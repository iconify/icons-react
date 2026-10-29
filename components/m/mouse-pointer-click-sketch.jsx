import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pdcv1iv4k.css';
import '../../css/w/wbd-d00fl.css';
import '../../css/w/w3_t-rbwy.css';
import '../../css/r/rrxlxdb6x.css';
import '../../css/j/jn20mob-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pdcv1iv4k wm-k"/><path class="wbd-d00fl wm-a"/><path class="w3_t-rbwy wm-k"/><path class="rrxlxdb6x wm-a"/><path class="jn20mob-g wm-s"/></g>`,
		"fallback": "withicons:mouse-pointer-click-sketch",
	});
}

export default Component;
