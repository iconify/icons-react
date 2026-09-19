import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_vbvttdg.css';
import '../../css/a/aje00pb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y_vbvttdg"/><path class="aje00pb3a"/></g>`,
		"fallback": "hugeicons:usb-error",
	});
}

export default Component;
