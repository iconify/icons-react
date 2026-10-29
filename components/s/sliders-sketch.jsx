import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vzbtg_b3k.css';
import '../../css/d/d8zqsacyg.css';
import '../../css/q/q_g5f4r3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vzbtg_b3k wm-k"/><path class="d8zqsacyg wm-k"/><path class="q_g5f4r3u wm-a"/></g>`,
		"fallback": "withicons:sliders-sketch",
	});
}

export default Component;
