import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lf-l1gbwa.css';
import '../../css/u/u3u6a8b0i.css';
import '../../css/i/iieeedbrs.css';
import '../../css/n/n6y6-qb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lf-l1gbwa"/><path class="u3u6a8b0i wm-a"/><path class="iieeedbrs"/><path class="n6y6-qb3g wm-a"/></g>`,
		"fallback": "withicons:toran",
	});
}

export default Component;
