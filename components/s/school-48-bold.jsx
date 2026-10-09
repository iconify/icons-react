import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr5mir7zh.css';
import '../../css/c/ce8x0bd0z.css';
import '../../css/q/qb8zetrno.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr5mir7zh"/><path class="ce8x0bd0z"/><path class="qb8zetrno"/>`,
		"fallback": "energy-icons:school-48-bold",
	});
}

export default Component;
