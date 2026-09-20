import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k88a7yboy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k88a7yboy"/>`,
		"fallback": "lsicon:report-outline",
	});
}

export default Component;
