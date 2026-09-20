import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r49j4cbxl.css';
import '../../css/f/f73br7sbk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="r49j4cbxl"/><path class="f73br7sbk"/></g>`,
		"fallback": "streamline:interface-edit-select-back-behind-box-design-layer-layers-select-send-to-back",
	});
}

export default Component;
