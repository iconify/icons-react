import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s00yt66oe.css';
import '../../css/t/t7wzrzbck.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s00yt66oe"/><path class="t7wzrzbck"/></g>`,
		"fallback": "fluent-emoji-flat:left-facing-fist-dark",
	});
}

export default Component;
