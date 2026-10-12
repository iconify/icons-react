import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t24ab9b2e.css';
import '../../css/a/agg_7qm2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t24ab9b2e"/><path class="agg_7qm2b"/></g>`,
		"fallback": "lucide-extended:moon-star-duotone",
	});
}

export default Component;
