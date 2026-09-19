import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o8f1hppox.css';
import '../../css/s/sf484d_zh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="o8f1hppox"/><path class="sf484d_zh"/></g>`,
		"fallback": "cryptocurrency-color:iq",
	});
}

export default Component;
