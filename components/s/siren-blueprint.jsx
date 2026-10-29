import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/ch_7uek8q.css';
import '../../css/n/np-blsbzy.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/q/qfvwlorad.css';
import '../../css/q/qwc4vnbsf.css';
import '../../css/i/idtixcqse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ch_7uek8q wm-deco"/><path class="np-blsbzy wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="qfvwlorad wm-k"/><path class="qwc4vnbsf wm-a"/><path class="idtixcqse wm-s"/></g>`,
		"fallback": "withicons:siren-blueprint",
	});
}

export default Component;
