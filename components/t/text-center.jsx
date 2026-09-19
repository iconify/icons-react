import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-by3r7ah.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-by3r7ah"/>`,
		"fallback": "bi:text-center",
	});
}

export default Component;
