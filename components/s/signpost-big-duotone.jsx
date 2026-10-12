import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8a-bjqpq.css';
import '../../css/v/v1rbi0bkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x8a-bjqpq"/><path class="v1rbi0bkr"/></g>`,
		"fallback": "lucide-extended:signpost-big-duotone",
	});
}

export default Component;
