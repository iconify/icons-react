import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bb7ngebrl.css';
import '../../css/e/ez5ohctrv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bb7ngebrl"/><path class="ez5ohctrv"/></g>`,
		"fallback": "streamline-color:usb-drive-flat",
	});
}

export default Component;
