import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bp1wnhbwh.css';
import '../../css/a/a2rf-bbfk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bp1wnhbwh"/><path class="a2rf-bbfk"/></g>`,
		"fallback": "glyphs:signal-75-outline",
	});
}

export default Component;
