import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w81yrzdvf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w81yrzdvf"/>`,
		"fallback": "fa7-solid:percentage",
	});
}

export default Component;
