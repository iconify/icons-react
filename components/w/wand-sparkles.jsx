import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wyfebegqp.css';
import '../../css/q/q73-lebvq.css';
import '../../css/d/d1y700bwp.css';
import '../../css/b/bue_v_rra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wyfebegqp"/><path class="q73-lebvq"/><path class="d1y700bwp"/><path class="bue_v_rra"/></g>`,
		"fallback": "withicons-retro:wand-sparkles",
	});
}

export default Component;
