import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l__qtsvwl.css';
import '../../css/x/xjgeo2bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l__qtsvwl"/><path class="xjgeo2bxv"/></g>`,
		"fallback": "keyline-icons:send-sharp-two-tone",
	});
}

export default Component;
