import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/w/w1vo2grui.css';
import '../../css/u/u2w4utbcp.css';
import '../../css/y/yt71xy8is.css';
import '../../css/n/nq6mfsuzd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="w1vo2grui"/><path class="u2w4utbcp"/><path class="yt71xy8is"/><path class="nq6mfsuzd"/></g>`,
		"fallback": "fluent-emoji-flat:pleading-face",
	});
}

export default Component;
