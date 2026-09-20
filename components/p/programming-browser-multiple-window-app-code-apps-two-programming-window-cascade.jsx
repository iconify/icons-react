import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e1ho-ybli.css';
import '../../css/g/gndeg6jzc.css';
import '../../css/g/g5n0smnba.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e1ho-ybli"/><rect class="gndeg6jzc"/><path class="g5n0smnba"/></g>`,
		"fallback": "streamline:programming-browser-multiple-window-app-code-apps-two-programming-window-cascade",
	});
}

export default Component;
