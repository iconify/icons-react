import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyn69_bds.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyn69_bds"/>`,
		"fallback": "fa7-brands:letterboxd",
	});
}

export default Component;
