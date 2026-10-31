import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t2w22st-t.css';
import '../../css/j/j3lg_wbgh.css';
import '../../css/c/c2x9_1bod.css';
import '../../css/j/ja91461cx.css';
import '../../css/h/h4kmlwbub.css';
import '../../css/h/h_22-lbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t2w22st-t wm-shadow"/><path class="j3lg_wbgh"/><path class="c2x9_1bod"/><path class="ja91461cx"/><path class="h4kmlwbub"/><path class="h_22-lbep"/></g>`,
		"fallback": "withicons-retro:red-lantern",
	});
}

export default Component;
