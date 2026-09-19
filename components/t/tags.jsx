import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_5g2hi6q.css';
import '../../css/c/cu16s__pq.css';
import '../../css/v/vm5081bct.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h_5g2hi6q"/><path class="cu16s__pq"/><path clip-rule="evenodd" class="vm5081bct"/></g>`,
		"fallback": "glyphs-poly:tags",
	});
}

export default Component;
