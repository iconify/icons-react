import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4761mehp.css';
import '../../css/z/zr08rv4hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l4761mehp"/><path class="zr08rv4hq"/></g>`,
		"fallback": "lucide-extended:lens-convex-duotone",
	});
}

export default Component;
