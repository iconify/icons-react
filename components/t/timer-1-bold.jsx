import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fer6iobvf.css';
import '../../css/l/lh95obbwd.css';
import '../../css/h/hyu-j45la.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fer6iobvf"/><path clip-rule="evenodd" class="lh95obbwd"/><path class="hyu-j45la"/></g>`,
		"fallback": "glyphs:timer-1-bold",
	});
}

export default Component;
