import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puy2won3v.css';
import '../../css/o/o78az9bjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="puy2won3v"/><path class="o78az9bjc"/></g>`,
		"fallback": "lucide-extended:slice-duotone",
	});
}

export default Component;
