import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxv7-tb1o.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxv7-tb1o"/>`,
		"fallback": "lineicons:linkedin-original",
	});
}

export default Component;
