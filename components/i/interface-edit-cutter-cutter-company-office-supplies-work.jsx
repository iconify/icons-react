import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qorjim-ik.css';
import '../../css/f/fo3cm2zqz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qorjim-ik"/><path class="fo3cm2zqz"/></g>`,
		"fallback": "streamline:interface-edit-cutter-cutter-company-office-supplies-work",
	});
}

export default Component;
