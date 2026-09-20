import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/giome7blc.css';
import '../../css/i/irudeebhr.css';
import '../../css/k/k3sddyo-g.css';
import '../../css/y/y_qkefbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="giome7blc"/><path class="irudeebhr"/><path class="k3sddyo-g"/><path class="y_qkefbec"/></g>`,
		"fallback": "solar:letter-opened-broken",
	});
}

export default Component;
