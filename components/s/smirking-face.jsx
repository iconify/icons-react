import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/x/x_yst2x8b.css';
import '../../css/i/i4a5dyb0g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="x_yst2x8b"/><path class="i4a5dyb0g"/></g>`,
		"fallback": "fluent-emoji-flat:smirking-face",
	});
}

export default Component;
