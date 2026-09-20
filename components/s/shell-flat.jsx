import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbi04sr9e.css';
import '../../css/m/mk6vqvzai.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bbi04sr9e"/><path class="mk6vqvzai"/></g>`,
		"fallback": "streamline-color:shell-flat",
	});
}

export default Component;
