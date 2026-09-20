import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olf1-rzdy.css';
import '../../css/k/k5qeymb0b.css';
import '../../css/m/m3psodbuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="olf1-rzdy"/><path class="k5qeymb0b"/><path class="m3psodbuh"/></g>`,
		"fallback": "streamline-sharp-color:keyboard-flat",
	});
}

export default Component;
