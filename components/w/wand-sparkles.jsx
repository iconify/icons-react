import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kncm1tx0o.css';
import '../../css/m/mob2hr_-u.css';
import '../../css/p/psyzc1_dw.css';
import '../../css/m/mvz-u7b1a.css';
import '../../css/g/g7tecfbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="kncm1tx0o"/><path class="mob2hr_-u wm-shine"/><path class="psyzc1_dw wm-k"/><path class="mvz-u7b1a wm-a"/><path class="g7tecfbpx wm-deco"/></g>`,
		"fallback": "withicons-kawaii:wand-sparkles",
	});
}

export default Component;
