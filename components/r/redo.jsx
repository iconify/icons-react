import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ykqlribzp.css';
import '../../css/q/qb4t4g2_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ykqlribzp"/><path class="qb4t4g2_e"/></g>`,
		"fallback": "withicons-retro:redo",
	});
}

export default Component;
