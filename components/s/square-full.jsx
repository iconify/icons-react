import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2ns6tbfl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2ns6tbfl"/>`,
		"fallback": "fa7-regular:square-full",
	});
}

export default Component;
