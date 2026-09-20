import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9h51b04b.css';
import '../../css/j/j39pv8-mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f9h51b04b"/><path class="j39pv8-mx"/></g>`,
		"fallback": "lets-icons:wallet-duotone-line",
	});
}

export default Component;
