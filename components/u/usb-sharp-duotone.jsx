import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k3drzc9fl.css';
import '../../css/y/ylejacb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="k3drzc9fl"/><path class="ylejacb2h"/></g>`,
		"fallback": "keyline-icons:usb-sharp-duotone",
	});
}

export default Component;
