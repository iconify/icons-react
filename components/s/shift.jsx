import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wja0d-bfk.css';
import '../../css/x/x_juf-0kp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wja0d-bfk"/><path class="x_juf-0kp"/></g>`,
		"fallback": "streamline-color:shift",
	});
}

export default Component;
