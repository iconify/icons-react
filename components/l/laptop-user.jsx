import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5efxubfu.css';
import '../../css/e/e474ru3-c.css';
import '../../css/l/l8enjrbgu.css';
import '../../css/j/j9b3--big.css';
import '../../css/l/lyzghxbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c5efxubfu"/><path class="e474ru3-c"/><path class="l8enjrbgu"/><path class="j9b3--big"/><path class="lyzghxbni"/></g>`,
		"fallback": "streamline-ultimate-color:laptop-user",
	});
}

export default Component;
