import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gte8b1byc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gte8b1byc"/>`,
		"fallback": "at-icons:tungsten-light",
	});
}

export default Component;
