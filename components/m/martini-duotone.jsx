import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjuum2lkt.css';
import '../../css/w/w6t3ij_cp.css';
import '../../css/y/y8tz8cb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rjuum2lkt"/><path class="w6t3ij_cp"/><path class="y8tz8cb_e"/></g>`,
		"fallback": "lucide-extended:martini-duotone",
	});
}

export default Component;
