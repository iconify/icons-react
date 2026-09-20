import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ur0178b0e.css';
import '../../css/g/giaysikpk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ur0178b0e"/><path class="giaysikpk"/></g>`,
		"fallback": "streamline-flex-color:trending-content",
	});
}

export default Component;
