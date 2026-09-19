import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tsw0n4b9s.css';
import '../../css/w/wagnunb8u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tsw0n4b9s"/><path clip-rule="evenodd" class="wagnunb8u"/></g>`,
		"fallback": "glyphs:plane-arrival-bold",
	});
}

export default Component;
