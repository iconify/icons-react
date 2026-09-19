import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrwt4tllx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrwt4tllx"/>`,
		"fallback": "at-icons:trash-can",
	});
}

export default Component;
