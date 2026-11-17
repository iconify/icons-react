import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ha4y_4a3w.css';
import '../../css/n/nw8k2pb0z.css';
import '../../css/o/o8yptmbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ha4y_4a3w"/><path class="nw8k2pb0z"/><path class="o8yptmbjc"/></g>`,
		"fallback": "lucide-extended:layout-grid-plus-duotone",
	});
}

export default Component;
