import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/df5km-bgn.css';
import '../../css/p/pishzubsf.css';
import '../../css/i/ix1b_41hr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="df5km-bgn"/><path class="pishzubsf"/><path class="ix1b_41hr"/></g>`,
		"fallback": "lucide-extended:shower-head-duotone",
	});
}

export default Component;
