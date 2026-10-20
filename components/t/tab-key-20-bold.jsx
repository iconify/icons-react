import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhr_7cy8v.css';
import '../../css/j/j-pcb1b_h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhr_7cy8v"/><path class="j-pcb1b_h"/>`,
		"fallback": "energy-icons:tab-key-20-bold",
	});
}

export default Component;
