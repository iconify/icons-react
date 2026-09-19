import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn8wa8oth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn8wa8oth"/>`,
		"fallback": "ci:line-chart-down",
	});
}

export default Component;
