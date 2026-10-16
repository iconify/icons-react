import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6jy34m0o.css';
import '../../css/y/yop_hibwm.css';
import '../../css/h/hhhkbob2q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6jy34m0o"/><path class="yop_hibwm"/><path class="hhhkbob2q"/>`,
		"fallback": "energy-icons:power-optimiser-20-bold",
	});
}

export default Component;
