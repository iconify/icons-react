import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pevnz3bgc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pevnz3bgc"/>`,
		"fallback": "subway:part-of-circle-2",
	});
}

export default Component;
