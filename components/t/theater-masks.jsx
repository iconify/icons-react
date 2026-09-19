import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe4f2nbiy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe4f2nbiy"/>`,
		"fallback": "fa7-solid:theater-masks",
	});
}

export default Component;
