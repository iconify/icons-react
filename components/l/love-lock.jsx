import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ye85m36wi.css';
import '../../css/f/fi2199b2p.css';
import '../../css/z/zl8ccnwit.css';
import '../../css/d/d-e-dgbnw.css';
import '../../css/h/hz2l4c11c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow ye85m36wi"/><path class="fi2199b2p"/><path class="zl8ccnwit"/><path class="d-e-dgbnw"/><path class="hz2l4c11c"/></g>`,
		"fallback": "withicons-retro:love-lock",
	});
}

export default Component;
