import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uexoy1bac.css';
import '../../css/v/vt6r2p3_b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uexoy1bac"/><path class="vt6r2p3_b"/></g>`,
		"fallback": "streamline-color:podium",
	});
}

export default Component;
