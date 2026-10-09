import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1_27vbhm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1_27vbhm"/>`,
		"fallback": "energy-icons:moon-20-bold",
	});
}

export default Component;
