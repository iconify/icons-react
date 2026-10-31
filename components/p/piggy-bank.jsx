import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e4w2urwxq.css';
import '../../css/n/nsn91h2yl.css';
import '../../css/u/us-a_n24g.css';
import '../../css/v/vc4lpfjrj.css';
import '../../css/p/pklvoochx.css';
import '../../css/o/of545gbwe.css';
import '../../css/f/ftjrkcchd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e4w2urwxq wm-shadow"/><path class="nsn91h2yl"/><path class="us-a_n24g"/><path class="vc4lpfjrj"/><path class="pklvoochx wm-s"/><path class="of545gbwe wm-s"/><path class="ftjrkcchd"/></g>`,
		"fallback": "withicons-retro:piggy-bank",
	});
}

export default Component;
