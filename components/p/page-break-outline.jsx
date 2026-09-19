import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d90u9e2cl.css';
import '../../css/y/yedrxvbcn.css';
import '../../css/u/umro7hm1n.css';
import '../../css/j/jhzkcobgl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d90u9e2cl"/><path clip-rule="evenodd" class="yedrxvbcn"/><path class="umro7hm1n"/><path clip-rule="evenodd" class="jhzkcobgl"/></g>`,
		"fallback": "glyphs:page-break-outline",
	});
}

export default Component;
