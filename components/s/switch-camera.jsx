import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i6w4h06su.css';
import '../../css/l/lqgqyob1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="i6w4h06su"/><path class="lqgqyob1y"/></g>`,
		"fallback": "withicons-bauhaus:switch-camera",
	});
}

export default Component;
