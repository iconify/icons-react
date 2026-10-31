import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l9kx8zb0x.css';
import '../../css/f/f-u9qsbvc.css';
import '../../css/q/quyocr0ug.css';
import '../../css/k/katwdi_0m.css';
import '../../css/m/mbfjzwhxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="l9kx8zb0x wm-shadow"/><path class="f-u9qsbvc wm-shadow"/><path class="quyocr0ug"/><path class="katwdi_0m"/><path class="mbfjzwhxs"/></g>`,
		"fallback": "withicons-brutal:puja-thali",
	});
}

export default Component;
