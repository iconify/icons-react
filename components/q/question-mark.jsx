import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wd-w5sr6f.css';
import '../../css/t/t0p2onb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wd-w5sr6f"/><path class="t0p2onb6b"/></g>`,
		"fallback": "andrsrxn:question-mark",
	});
}

export default Component;
