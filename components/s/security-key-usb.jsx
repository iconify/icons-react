import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/to8xb4b0p.css';
import '../../css/d/d4-5slbjk.css';
import '../../css/d/dqc3hy9ek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="to8xb4b0p"/><path class="d4-5slbjk"/><path class="dqc3hy9ek"/></g>`,
		"fallback": "hugeicons:security-key-usb",
	});
}

export default Component;
