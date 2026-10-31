import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vfvahr0go.css';
import '../../css/w/w7582bb1z.css';
import '../../css/n/nfdxm2bpu.css';
import '../../css/o/okm7frrwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vfvahr0go wm-shadow"/><path class="w7582bb1z wm-shadow"/><path class="nfdxm2bpu"/><path class="okm7frrwy"/></g>`,
		"fallback": "withicons-brutal:tooth-crown",
	});
}

export default Component;
