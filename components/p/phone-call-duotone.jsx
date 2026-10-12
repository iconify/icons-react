import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3_oqvjzs.css';
import '../../css/s/sd8hp-bgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k3_oqvjzs"/><path class="sd8hp-bgw"/></g>`,
		"fallback": "lucide-extended:phone-call-duotone",
	});
}

export default Component;
