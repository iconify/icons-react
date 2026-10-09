import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvhip5cnc.css';
import '../../css/y/y35w4ccky.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvhip5cnc"/><path class="y35w4ccky"/>`,
		"fallback": "energy-icons:micro-inverter-20",
	});
}

export default Component;
