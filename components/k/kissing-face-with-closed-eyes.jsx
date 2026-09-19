import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/b/byi_rabby.css';
import '../../css/e/eovcjhblr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="byi_rabby"/><path class="eovcjhblr"/></g>`,
		"fallback": "fluent-emoji-flat:kissing-face-with-closed-eyes",
	});
}

export default Component;
