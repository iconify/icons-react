import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opnm4c39e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opnm4c39e"/>`,
		"fallback": "bi:patch-minus-fill",
	});
}

export default Component;
