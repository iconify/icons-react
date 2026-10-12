import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnkdaj0ty.css';
import '../../css/s/s25lxsbvo.css';
import '../../css/n/n9nithbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pnkdaj0ty"/><path class="s25lxsbvo"/><path class="n9nithbvv"/></g>`,
		"fallback": "lucide-extended:landmark-duotone",
	});
}

export default Component;
