import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ezjeiheop.css';
import '../../css/p/pq47k7f1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ezjeiheop"/><path class="pq47k7f1t"/></g>`,
		"fallback": "lucide-extended:radiation-duotone",
	});
}

export default Component;
