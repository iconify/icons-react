import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/h/hdstceowm.css';
import '../../css/k/k858ldbet.css';
import '../../css/d/dyh2mrb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="hdstceowm"/><path class="k858ldbet"/><path class="dyh2mrb1v"/></g>`,
		"fallback": "mage:question-mark-circle",
	});
}

export default Component;
