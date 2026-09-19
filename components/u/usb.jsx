import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m3v9f8toj.css';
import '../../css/o/ovdhbwy_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m3v9f8toj"/><path clip-rule="evenodd" class="ovdhbwy_l"/></g>`,
		"fallback": "gg:usb",
	});
}

export default Component;
