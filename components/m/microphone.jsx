import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l1kpi4l9x.css';
import '../../css/l/lo2nqcdly.css';
import '../../css/l/lk0gm0ghl.css';
import '../../css/g/g16rerbrs.css';
import '../../css/i/i-q2dqbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="l1kpi4l9x wm-shadow"/><path class="lo2nqcdly"/><path class="lk0gm0ghl"/><path class="g16rerbrs"/><path class="i-q2dqbnv"/></g>`,
		"fallback": "withicons-retro:microphone",
	});
}

export default Component;
