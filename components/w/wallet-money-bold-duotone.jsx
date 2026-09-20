import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e1reemjkj.css';
import '../../css/a/ak4yf0bmi.css';
import '../../css/a/a7j-njlvn.css';
import '../../css/r/rpm4gcb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e1reemjkj"/><path class="ak4yf0bmi"/><path class="a7j-njlvn"/><path class="rpm4gcb5e"/></g>`,
		"fallback": "solar:wallet-money-bold-duotone",
	});
}

export default Component;
