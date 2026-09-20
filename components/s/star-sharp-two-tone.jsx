import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/ppbrhlc2r.css';
import '../../css/h/hi5vxxi_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ppbrhlc2r"/><path class="hi5vxxi_r"/></g>`,
		"fallback": "keyline-icons:star-sharp-two-tone",
	});
}

export default Component;
