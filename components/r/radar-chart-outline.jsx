import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6lk9v31w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6lk9v31w"/>`,
		"fallback": "lsicon:radar-chart-outline",
	});
}

export default Component;
