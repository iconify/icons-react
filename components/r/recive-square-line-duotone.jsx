import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g6f3vgu_l.css';
import '../../css/k/k_2v7zbhf.css';
import '../../css/v/va-3p8pyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g6f3vgu_l"/><path class="k_2v7zbhf"/><path class="va-3p8pyw"/></g>`,
		"fallback": "solar:recive-square-line-duotone",
	});
}

export default Component;
