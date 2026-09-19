import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m6d6doeil.css';
import '../../css/z/z1z870b5e.css';
import '../../css/a/ay85fxbvo.css';
import '../../css/i/in6k146eo.css';
import '../../css/a/au8b_6b3q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m6d6doeil"/><path class="z1z870b5e"/><path class="ay85fxbvo"/><path class="in6k146eo"/><path class="au8b_6b3q"/></g>`,
		"fallback": "fluent-emoji-flat:petri-dish",
	});
}

export default Component;
