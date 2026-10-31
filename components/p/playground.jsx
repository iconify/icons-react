import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qzn0s5byj.css';
import '../../css/g/gt01pjblh.css';
import '../../css/o/o2p2ofbsf.css';
import '../../css/t/t9dxyfbzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qzn0s5byj wm-shadow"/><path class="gt01pjblh"/><path class="o2p2ofbsf"/><path class="t9dxyfbzf"/></g>`,
		"fallback": "withicons-retro:playground",
	});
}

export default Component;
