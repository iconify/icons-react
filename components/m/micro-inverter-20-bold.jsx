import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqjo_17sw.css';
import '../../css/f/fv344tbkt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqjo_17sw"/><path class="fv344tbkt"/>`,
		"fallback": "energy-icons:micro-inverter-20-bold",
	});
}

export default Component;
