import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xuwr6hbgs.css';
import '../../css/q/qzlqd9t-o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xuwr6hbgs"/><path class="qzlqd9t-o"/></g>`,
		"fallback": "streamline-flex-color:logout-1",
	});
}

export default Component;
