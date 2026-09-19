import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jql1cebqr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jql1cebqr"/>`,
		"fallback": "fa6-solid:vial-virus",
	});
}

export default Component;
