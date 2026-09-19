import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nenmxynyt.css';
import '../../css/n/ne6n1lb1p.css';
import '../../css/n/nyh8z-3vx.css';
import '../../css/u/uktxk7bfy.css';
import '../../css/q/qhq3-ccss.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nenmxynyt"/><path class="ne6n1lb1p"/><path class="nyh8z-3vx"/><path class="uktxk7bfy"/><path class="qhq3-ccss"/></g>`,
		"fallback": "fluent-emoji-flat:rat",
	});
}

export default Component;
