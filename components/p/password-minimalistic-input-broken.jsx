import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/om4lnzbpu.css';
import '../../css/b/bpkt4gbdh.css';
import '../../css/s/sp15d0bxe.css';
import '../../css/k/km0rz_boi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="om4lnzbpu"/><path class="bpkt4gbdh"/><path class="sp15d0bxe"/><path class="km0rz_boi"/></g>`,
		"fallback": "solar:password-minimalistic-input-broken",
	});
}

export default Component;
