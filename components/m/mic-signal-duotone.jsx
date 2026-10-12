import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p6w5bpu-r.css';
import '../../css/f/f81gfpzad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p6w5bpu-r"/><path class="f81gfpzad"/></g>`,
		"fallback": "lucide-extended:mic-signal-duotone",
	});
}

export default Component;
