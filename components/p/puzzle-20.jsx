import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov4_j55sp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov4_j55sp"/>`,
		"fallback": "energy-icons:puzzle-20",
	});
}

export default Component;
