import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fs14leyon.css';
import '../../css/o/olznywbdz.css';
import '../../css/b/bpvbic07d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fs14leyon"/><path class="olznywbdz"/><path class="bpvbic07d"/></g>`,
		"fallback": "lucide-extended:tickets-plane-duotone",
	});
}

export default Component;
