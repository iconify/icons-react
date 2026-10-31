import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3xvw3b-s.css';
import '../../css/o/oolx8wghy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e3xvw3b-s"/><path class="oolx8wghy"/></g>`,
		"fallback": "coolicons:owl-head-duotone-round",
	});
}

export default Component;
