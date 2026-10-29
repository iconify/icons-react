import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/uk3if241z.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/m/mfr4u0bnw.css';
import '../../css/j/j13_cqbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="uk3if241z wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="mfr4u0bnw wm-k"/><path class="j13_cqbrn wm-a"/></g>`,
		"fallback": "withicons:life-buoy-blueprint",
	});
}

export default Component;
