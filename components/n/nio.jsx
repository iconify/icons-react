import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zuzfrpbdn.css';
import '../../css/s/s0zgf8_wg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="zuzfrpbdn"/><path class="s0zgf8_wg"/></g>`,
		"fallback": "cryptocurrency-color:nio",
	});
}

export default Component;
