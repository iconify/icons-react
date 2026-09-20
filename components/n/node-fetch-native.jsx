import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iba-o7bgl.css';
import '../../css/f/fzrqn6dxq.css';
import '../../css/k/kuz0qbccj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iba-o7bgl"/><path class="fzrqn6dxq"/><path class="kuz0qbccj"/></g>`,
		"fallback": "unjs:node-fetch-native",
	});
}

export default Component;
