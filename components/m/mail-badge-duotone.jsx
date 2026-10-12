import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ic-ypnb0e.css';
import '../../css/v/vco6qb1-p.css';
import '../../css/q/qwy_kna5r.css';
import '../../css/c/cr4zr3btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ic-ypnb0e"/><path class="vco6qb1-p"/><path class="qwy_kna5r"/><path class="cr4zr3btz"/></g>`,
		"fallback": "lucide-extended:mail-badge-duotone",
	});
}

export default Component;
