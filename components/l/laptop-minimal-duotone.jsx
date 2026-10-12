import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qsj7i0s5h.css';
import '../../css/u/ukf_qkbcb.css';
import '../../css/h/h4t8hzb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qsj7i0s5h"/><path class="ukf_qkbcb"/><path class="h4t8hzb4h"/></g>`,
		"fallback": "lucide-extended:laptop-minimal-duotone",
	});
}

export default Component;
