import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qac9nwd1z.css';
import '../../css/s/s5y3dob-a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qac9nwd1z"/><path class="s5y3dob-a"/></g>`,
		"fallback": "streamline-plump-color:multiple-stars-flat",
	});
}

export default Component;
