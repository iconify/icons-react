import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fw4kgw1nz.css';
import '../../css/s/sd8hp-bgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fw4kgw1nz"/><path class="sd8hp-bgw"/></g>`,
		"fallback": "lucide-extended:phone-duotone",
	});
}

export default Component;
