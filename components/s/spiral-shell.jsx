import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ewq0qqsvm.css';
import '../../css/t/t439gvbnz.css';
import '../../css/r/rk1rhgo-z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ewq0qqsvm"/><path class="t439gvbnz"/><path class="rk1rhgo-z"/></g>`,
		"fallback": "fluent-emoji-flat:spiral-shell",
	});
}

export default Component;
