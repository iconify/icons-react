import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_840f2vp.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_840f2vp"/>`,
		"fallback": "lineicons:sort-alpha-asc",
	});
}

export default Component;
