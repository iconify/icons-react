import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rep-qbcvo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rep-qbcvo"/>`,
		"fallback": "dinkie-icons:orthogon7x7",
	});
}

export default Component;
