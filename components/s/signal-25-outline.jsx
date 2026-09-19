import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u43sr_10d.css';
import '../../css/m/mpiy4fb6m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u43sr_10d"/><path class="mpiy4fb6m"/></g>`,
		"fallback": "glyphs:signal-25-outline",
	});
}

export default Component;
