import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ueln8bb9d.css';
import '../../css/h/h00izt1-r.css';
import '../../css/i/isvacwbvx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ueln8bb9d"/><path class="h00izt1-r"/><path class="isvacwbvx"/></g>`,
		"fallback": "glyphs-poly:page-break",
	});
}

export default Component;
