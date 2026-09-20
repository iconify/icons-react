import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqn8-vbkb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqn8-vbkb"/>`,
		"fallback": "octicon:italic-16",
	});
}

export default Component;
