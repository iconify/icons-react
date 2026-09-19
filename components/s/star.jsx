import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdii5ibko.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdii5ibko"/>`,
		"fallback": "at-icons:star",
	});
}

export default Component;
