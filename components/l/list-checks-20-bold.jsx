import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjw_5r1kp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjw_5r1kp"/>`,
		"fallback": "energy-icons:list-checks-20-bold",
	});
}

export default Component;
