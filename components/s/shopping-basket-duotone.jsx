import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fh2fg062h.css';
import '../../css/k/ks0tfeb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fh2fg062h"/><path class="ks0tfeb5z"/></g>`,
		"fallback": "lucide-extended:shopping-basket-duotone",
	});
}

export default Component;
