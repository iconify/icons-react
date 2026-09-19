import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o-ykjtgrt.css';
import '../../css/q/qhf8v1bth.css';
import '../../css/i/iu5m-vbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o-ykjtgrt"/><path class="qhf8v1bth"/><path class="iu5m-vbcs"/></g>`,
		"fallback": "iconoir:pen-tablet-connect-usb",
	});
}

export default Component;
