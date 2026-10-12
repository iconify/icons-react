import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p6zbc-bkm.css';
import '../../css/u/u499o5yuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p6zbc-bkm"/><path class="u499o5yuf"/></g>`,
		"fallback": "lucide-extended:line-dot-right-horizontal-duotone",
	});
}

export default Component;
