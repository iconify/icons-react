import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz5i1miti.css';
import '../../css/o/o5_vxlb_k.css';
import '../../css/t/t5gmhdcyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qz5i1miti"/><path class="o5_vxlb_k"/><path class="t5gmhdcyl"/></g>`,
		"fallback": "lucide-extended:tablet-smartphone-duotone",
	});
}

export default Component;
