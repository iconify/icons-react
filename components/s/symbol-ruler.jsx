import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0pp-x5gd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0pp-x5gd"/>`,
		"fallback": "codicon:symbol-ruler",
	});
}

export default Component;
