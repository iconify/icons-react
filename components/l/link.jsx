import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/j/jd_vobbyd.css';
import '../../css/f/frg622blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="jd_vobbyd"/><path class="frg622blj"/></g>`,
		"fallback": "humbleicons:link",
	});
}

export default Component;
