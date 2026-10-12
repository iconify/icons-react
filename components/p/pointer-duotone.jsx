import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/la6rrxbig.css';
import '../../css/j/jziytlbpg.css';
import '../../css/p/p-xr52ctm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="la6rrxbig"/><path class="jziytlbpg"/><path class="p-xr52ctm"/></g>`,
		"fallback": "lucide-extended:pointer-duotone",
	});
}

export default Component;
