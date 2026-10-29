import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a-ssu_ocm.css';
import '../../css/u/uvcqju4fe.css';
import '../../css/z/z3-qn8kuh.css';
import '../../css/b/bunwpimed.css';
import '../../css/o/ob48onbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a-ssu_ocm"/><path class="uvcqju4fe wm-a"/><path class="wm-a z3-qn8kuh"/><path class="bunwpimed"/><path class="ob48onbmt wm-a"/></g>`,
		"fallback": "withicons:rocket-duo",
	});
}

export default Component;
