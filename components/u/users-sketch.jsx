import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v6mjv2pfr.css';
import '../../css/k/kbr7fzbsv.css';
import '../../css/k/kebgbt-gk.css';
import '../../css/x/xu_bh3b0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v6mjv2pfr wm-k"/><path class="kbr7fzbsv wm-k"/><path class="kebgbt-gk wm-k"/><path class="wm-a xu_bh3b0d"/></g>`,
		"fallback": "withicons:users-sketch",
	});
}

export default Component;
