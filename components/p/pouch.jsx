import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tton4-8be.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tton4-8be"/>`,
		"fallback": "at-icons:pouch",
	});
}

export default Component;
