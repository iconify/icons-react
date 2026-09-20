import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1g1p6r1v.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1g1p6r1v"/>`,
		"fallback": "thesvg:networkx",
	});
}

export default Component;
