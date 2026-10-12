import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cetr80mnk.css';
import '../../css/d/dmvtise6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cetr80mnk"/><path class="dmvtise6b"/></g>`,
		"fallback": "lucide-extended:piano-duotone",
	});
}

export default Component;
