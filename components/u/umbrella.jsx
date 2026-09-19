import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcln_tb1s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcln_tb1s"/>`,
		"fallback": "dinkie-icons:umbrella",
	});
}

export default Component;
