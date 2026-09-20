import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulcxtvz6q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulcxtvz6q"/>`,
		"fallback": "lsicon:radar-chart-filled",
	});
}

export default Component;
