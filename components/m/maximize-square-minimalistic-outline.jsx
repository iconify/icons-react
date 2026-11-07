import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8h-3cbpv.css';
import '../../css/j/jr-ln5z8r.css';
import '../../css/t/t5k-_f5ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8h-3cbpv"/><path class="jr-ln5z8r"/><path clip-rule="evenodd" class="t5k-_f5ou"/>`,
		"fallback": "solar:maximize-square-minimalistic-outline",
	});
}

export default Component;
