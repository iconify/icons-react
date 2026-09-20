import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/icfm9_b4l.css';
import '../../css/b/bkbdjkb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="icfm9_b4l"/><path clip-rule="evenodd" class="bkbdjkb8o"/></g>`,
		"fallback": "majesticons:map-marker-area",
	});
}

export default Component;
