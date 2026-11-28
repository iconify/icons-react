import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q5ttimbfx.css';
import '../../css/h/hpm3n00kb.css';
import '../../css/j/jlf-noban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q5ttimbfx"/><path class="hpm3n00kb"/><path class="jlf-noban"/></g>`,
		"fallback": "iconaut:sidebar-right-expand",
	});
}

export default Component;
