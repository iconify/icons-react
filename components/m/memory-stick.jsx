import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ub620cbcb.css';
import '../../css/s/s4v5vq33h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ub620cbcb"/><rect class="s4v5vq33h"/></g>`,
		"fallback": "lucide:memory-stick",
	});
}

export default Component;
