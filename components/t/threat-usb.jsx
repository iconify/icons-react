import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/ahr92ac1u.css';
import '../../css/r/rv91_vbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ahr92ac1u"/><path class="rv91_vbdz"/></g>`,
		"fallback": "streamline-sharp:threat-usb",
	});
}

export default Component;
