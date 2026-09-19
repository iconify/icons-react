import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tt1s2cc4g.css';
import '../../css/q/q5hggmnsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tt1s2cc4g"/><path class="q5hggmnsl"/></g>`,
		"fallback": "iconamoon:like-thin",
	});
}

export default Component;
