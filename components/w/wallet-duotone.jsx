import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fo5gddyxp.css';
import '../../css/n/nyv5_pnax.css';
import '../../css/i/il-hj08zf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fo5gddyxp"/><path class="nyv5_pnax"/><path class="il-hj08zf"/></g>`,
		"fallback": "lucide-extended:wallet-duotone",
	});
}

export default Component;
