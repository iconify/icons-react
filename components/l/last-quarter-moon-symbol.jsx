import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cftt4jdtj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cftt4jdtj"/>`,
		"fallback": "dinkie-icons:last-quarter-moon-symbol",
	});
}

export default Component;
