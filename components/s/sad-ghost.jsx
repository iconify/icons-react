import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/inzh_j00b.css';
import '../../css/e/eyrzruisf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="inzh_j00b"/><path class="eyrzruisf"/></g>`,
		"fallback": "mynaui:sad-ghost",
	});
}

export default Component;
