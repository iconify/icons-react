import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u61e30o2e.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u61e30o2e"/>`,
		"fallback": "fa7-solid:receipt",
	});
}

export default Component;
