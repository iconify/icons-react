import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr75xkbok.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr75xkbok"/>`,
		"fallback": "lineicons:link",
	});
}

export default Component;
