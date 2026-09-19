import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p3bj95lon.css';
import '../../css/v/vs9f7pgfj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p3bj95lon"/><path class="vs9f7pgfj"/></g>`,
		"fallback": "glyphs:plane-departure-bold",
	});
}

export default Component;
