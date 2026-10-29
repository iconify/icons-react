import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/kdor8uosb.css';
import '../../css/f/fv_0-tisf.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/o/oeebofbrq.css';
import '../../css/f/folfl_fvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="kdor8uosb wm-deco"/><path class="fv_0-tisf wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="oeebofbrq wm-k"/><path class="folfl_fvi wm-a"/></g>`,
		"fallback": "withicons:snow-globe-blueprint",
	});
}

export default Component;
