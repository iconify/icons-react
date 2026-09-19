import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/w/wqwrmk6iy.css';
import '../../css/q/q-zrckw6h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="wqwrmk6iy"/><path class="q-zrckw6h"/></g>`,
		"fallback": "fluent-emoji-flat:smiling-face-with-smiling-eyes",
	});
}

export default Component;
