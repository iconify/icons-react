import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruhfogbmm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruhfogbmm"/>`,
		"fallback": "energy-icons:puzzle-20-bold",
	});
}

export default Component;
