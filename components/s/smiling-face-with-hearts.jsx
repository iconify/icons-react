import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/f/fnbr6gb8l.css';
import '../../css/u/u_ji7nbht.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="fnbr6gb8l"/><path class="u_ji7nbht"/></g>`,
		"fallback": "fluent-emoji-flat:smiling-face-with-hearts",
	});
}

export default Component;
