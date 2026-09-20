import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tfp8vd3jv.css';
import '../../css/g/g71x3acvt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tfp8vd3jv"/><rect class="g71x3acvt"/></g>`,
		"fallback": "streamline:interface-arrows-move-left-move-left-arrows",
	});
}

export default Component;
