import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n5z9vnbeb.css';
import '../../css/x/x9x785x5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="n5z9vnbeb"/><path class="wm-a x9x785x5y"/></g>`,
		"fallback": "withicons:shapes",
	});
}

export default Component;
