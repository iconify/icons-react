import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t8bw_b3sk.css';
import '../../css/s/sxh_y2bfd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t8bw_b3sk"/><path class="sxh_y2bfd"/></g>`,
		"fallback": "streamline-flex:usb-port",
	});
}

export default Component;
