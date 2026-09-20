import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wddptmb0q.css';
import '../../css/m/meoqnwc3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wddptmb0q"/><path class="meoqnwc3s"/></g>`,
		"fallback": "lets-icons:sound-fill",
	});
}

export default Component;
