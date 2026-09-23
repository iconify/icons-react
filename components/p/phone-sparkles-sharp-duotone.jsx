import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vk9v_xb8o.css';
import '../../css/s/snibgdcaa.css';
import '../../css/n/n19x7nf9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vk9v_xb8o"/><path class="snibgdcaa"/><path class="n19x7nf9h"/></g>`,
		"fallback": "keyline-icons:phone-sparkles-sharp-duotone",
	});
}

export default Component;
