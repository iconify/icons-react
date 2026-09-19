import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8v2597ot.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8v2597ot"/>`,
		"fallback": "fa-solid:laptop-medical",
	});
}

export default Component;
