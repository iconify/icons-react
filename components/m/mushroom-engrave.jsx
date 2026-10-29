import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gpzd8zb1s.css';
import '../../css/t/ts-fa3biy.css';
import '../../css/q/qf-tu6dot.css';
import '../../css/i/iycs7wjzl.css';
import '../../css/t/tsi5nvbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gpzd8zb1s wm-k"/><path class="ts-fa3biy wm-a"/><path class="qf-tu6dot wm-shadow"/><path class="iycs7wjzl wm-k"/><path class="tsi5nvbml wm-a"/></g>`,
		"fallback": "withicons:mushroom-engrave",
	});
}

export default Component;
