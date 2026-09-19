import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k2zyqvp7q.css';
import '../../css/h/h4c5d65yo.css';
import '../../css/r/r7iicccmt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k2zyqvp7q"/><path class="h4c5d65yo"/><path class="r7iicccmt"/></g>`,
		"fallback": "glyphs:signal-25-duo",
	});
}

export default Component;
