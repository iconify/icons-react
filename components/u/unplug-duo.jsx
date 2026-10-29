import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fu8_hdc5h.css';
import '../../css/v/vgsxhnmjv.css';
import '../../css/z/zzdfvdb8o.css';
import '../../css/h/hjbc2qsic.css';
import '../../css/v/v7tmcrk-x.css';
import '../../css/q/q9seatbmp.css';
import '../../css/e/er_76pq8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fu8_hdc5h"/><path class="vgsxhnmjv wm-s"/><path class="wm-a zzdfvdb8o"/><path class="hjbc2qsic"/><path class="v7tmcrk-x wm-a"/><path class="q9seatbmp"/><path class="er_76pq8o wm-a"/></g>`,
		"fallback": "withicons:unplug-duo",
	});
}

export default Component;
