import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fq53arb9x.css';
import '../../css/l/l-l2fpbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fq53arb9x"/><path class="l-l2fpbwv"/></g>`,
		"fallback": "solar:laptop-bold",
	});
}

export default Component;
