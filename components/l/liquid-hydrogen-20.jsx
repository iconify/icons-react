import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az46grrij.css';
import '../../css/k/k0js0g_8g.css';
import '../../css/s/sp-6bhk-r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az46grrij"/><path class="k0js0g_8g"/><path class="sp-6bhk-r"/>`,
		"fallback": "energy-icons:liquid-hydrogen-20",
	});
}

export default Component;
