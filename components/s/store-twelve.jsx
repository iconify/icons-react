import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6y5mdbok.css';
import '../../css/z/z9e5gibdn.css';
import '../../css/y/yhpn0yb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k6y5mdbok"/><path class="z9e5gibdn"/><path class="yhpn0yb8s"/></g>`,
		"fallback": "andrsrxn:store-twelve",
	});
}

export default Component;
