import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jsmlzvbam.css';
import '../../css/r/rh7vx0boa.css';
import '../../css/l/lwfmi51_z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jsmlzvbam"/><path class="rh7vx0boa"/><path class="lwfmi51_z"/></g>`,
		"fallback": "streamline-flex-color:threat-usb",
	});
}

export default Component;
