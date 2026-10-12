import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veoutmb5y.css';
import '../../css/n/nutvqx2bw.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veoutmb5y"/><path class="nutvqx2bw"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:smartphone-check-20-bold",
	});
}

export default Component;
