import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr-7drb-g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr-7drb-g"/>`,
		"fallback": "osmic:rental-car-14",
	});
}

export default Component;
