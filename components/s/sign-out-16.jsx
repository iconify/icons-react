import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwe9ecw5o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwe9ecw5o"/>`,
		"fallback": "octicon:sign-out-16",
	});
}

export default Component;
