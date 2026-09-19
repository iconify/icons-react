import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw6k_dayf.css';

const viewBox = {"width":628,"height":694};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw6k_dayf"/>`,
		"fallback": "ls:umbrella",
	});
}

export default Component;
