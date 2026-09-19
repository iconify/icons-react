import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/k/k5q4ew3vv.css';
import '../../css/e/e_noebb3m.css';
import '../../css/k/kvgksqi2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="k5q4ew3vv"/><path class="e_noebb3m"/><path class="kvgksqi2r"/></g>`,
		"fallback": "iconamoon:sign-division-square",
	});
}

export default Component;
