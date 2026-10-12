import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l2iw09box.css';
import '../../css/d/d7luv5b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l2iw09box"/><path class="d7luv5b1z"/></g>`,
		"fallback": "lucide-extended:rows-4-duotone",
	});
}

export default Component;
