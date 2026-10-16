import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f44987blh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f44987blh"/>`,
		"fallback": "energy-icons:line-fault-20-bold",
	});
}

export default Component;
