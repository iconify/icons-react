import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1fmneb2c.css';
import '../../css/y/yx0qcsbua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1fmneb2c"/><path class="yx0qcsbua"/></g>`,
		"fallback": "lucide-extended:rugby-ball-duotone",
	});
}

export default Component;
