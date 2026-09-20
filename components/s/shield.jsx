import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq9tt3b9t.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq9tt3b9t"/>`,
		"fallback": "lineicons:shield",
	});
}

export default Component;
