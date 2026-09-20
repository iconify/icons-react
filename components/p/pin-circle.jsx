import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bc1ztk9_s.css';
import '../../css/z/z-3c0_b1b.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bc1ztk9_s"/><path class="z-3c0_b1b"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:pin-circle",
	});
}

export default Component;
