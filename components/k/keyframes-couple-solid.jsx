import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-l1pd0_w.css';
import '../../css/t/troua1bdv.css';
import '../../css/g/gt458lbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h-l1pd0_w"><path clip-rule="evenodd" class="troua1bdv"/><path class="gt458lbgp"/></g>`,
		"fallback": "iconoir:keyframes-couple-solid",
	});
}

export default Component;
