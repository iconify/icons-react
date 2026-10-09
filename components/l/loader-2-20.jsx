import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz3rcwbue.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz3rcwbue"/>`,
		"fallback": "energy-icons:loader-2-20",
	});
}

export default Component;
