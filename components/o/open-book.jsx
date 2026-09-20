import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xn9txobok.css';
import '../../css/o/oe42pmb_i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xn9txobok"/><path class="oe42pmb_i"/></g>`,
		"fallback": "streamline-color:open-book",
	});
}

export default Component;
