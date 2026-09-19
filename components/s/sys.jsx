import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pheq68b_z.css';
import '../../css/t/t6if9abgd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="pheq68b_z"/><path class="t6if9abgd"/></g>`,
		"fallback": "cryptocurrency-color:sys",
	});
}

export default Component;
