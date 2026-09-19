import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvi8z-bdd.css';
import '../../css/m/mwd7o545e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pvi8z-bdd"/><path clip-rule="evenodd" class="mwd7o545e"/></g>`,
		"fallback": "fluent-emoji-flat:rightwards-hand-medium",
	});
}

export default Component;
