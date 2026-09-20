import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udv3tkbrd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udv3tkbrd"/>`,
		"fallback": "lsicon:up-outline",
	});
}

export default Component;
