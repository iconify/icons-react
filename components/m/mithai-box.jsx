import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z9_d9rblc.css';
import '../../css/z/zre_4ebfh.css';
import '../../css/l/l83cxjbxw.css';
import '../../css/p/pb0bn199b.css';
import '../../css/i/i0yqkbc3h.css';
import '../../css/w/wagk4ab0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow z9_d9rblc"/><path class="wm-shadow zre_4ebfh"/><path class="l83cxjbxw"/><path class="pb0bn199b"/><path class="i0yqkbc3h"/><path class="wagk4ab0y"/></g>`,
		"fallback": "withicons-brutal:mithai-box",
	});
}

export default Component;
