import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v85x-3b_x.css';
import '../../css/j/jnl-9dcly.css';
import '../../css/r/rgyvxub6w.css';
import '../../css/a/apows5dpr.css';
import '../../css/x/xzmjggb6m.css';
import '../../css/i/i6h333bov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v85x-3b_x wm-k"/><path class="jnl-9dcly wm-a"/><path class="rgyvxub6w wm-s"/><path class="apows5dpr wm-k"/><path class="wm-a xzmjggb6m"/><path class="i6h333bov wm-s"/></g>`,
		"fallback": "withicons:microphone-off-sketch",
	});
}

export default Component;
