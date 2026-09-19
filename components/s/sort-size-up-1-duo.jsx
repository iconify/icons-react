import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgqr0ac4v.css';
import '../../css/u/u-js1tdmc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qgqr0ac4v"/><path class="u-js1tdmc"/></g>`,
		"fallback": "glyphs:sort-size-up-1-duo",
	});
}

export default Component;
