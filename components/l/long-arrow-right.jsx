import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arjc7_bym.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arjc7_bym"/>`,
		"fallback": "fa7-solid:long-arrow-right",
	});
}

export default Component;
