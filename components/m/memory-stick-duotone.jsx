import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0hunl_xa.css';
import '../../css/n/nr-ph-47r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j0hunl_xa"/><path class="nr-ph-47r"/></g>`,
		"fallback": "lucide-extended:memory-stick-duotone",
	});
}

export default Component;
