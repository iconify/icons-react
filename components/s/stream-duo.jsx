import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx-6u6bhr.css';
import '../../css/q/qd22rhbfq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lx-6u6bhr"/><path class="qd22rhbfq"/></g>`,
		"fallback": "glyphs:stream-duo",
	});
}

export default Component;
