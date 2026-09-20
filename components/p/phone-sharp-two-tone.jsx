import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/ehmp1dbtn.css';
import '../../css/v/vk9v_xb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ehmp1dbtn"/><path class="vk9v_xb8o"/></g>`,
		"fallback": "keyline-icons:phone-sharp-two-tone",
	});
}

export default Component;
