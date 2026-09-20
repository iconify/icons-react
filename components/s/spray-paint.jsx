import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tcs1s62tq.css';
import '../../css/u/ubp47bw-e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tcs1s62tq"/><path class="ubp47bw-e"/></g>`,
		"fallback": "streamline-color:spray-paint",
	});
}

export default Component;
