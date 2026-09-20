import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5eoflcbf.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5eoflcbf"/>`,
		"fallback": "lineicons:spray",
	});
}

export default Component;
