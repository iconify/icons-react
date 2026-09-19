import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g5qhxlbsq.css';
import '../../css/z/z2t0oq1-o.css';
import '../../css/f/f1ueyq9sn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g5qhxlbsq"/><path class="z2t0oq1-o"/><path class="f1ueyq9sn"/></g>`,
		"fallback": "glyphs-poly:leaf",
	});
}

export default Component;
