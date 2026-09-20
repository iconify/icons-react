import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_ev7s-sv.css';
import '../../css/b/bx7216byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t_ev7s-sv"/><path class="bx7216byy"/></g>`,
		"fallback": "material-icon-theme:lib",
	});
}

export default Component;
