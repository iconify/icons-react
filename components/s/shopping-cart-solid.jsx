import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kveqlsbwh.css';
import '../../css/a/ag8b68bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kveqlsbwh"/><path class="ag8b68bja wm-a"/></g>`,
		"fallback": "withicons:shopping-cart-solid",
	});
}

export default Component;
