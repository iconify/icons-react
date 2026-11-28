import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8acfk1bp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8acfk1bp"/>`,
		"fallback": "noviair:line-chart-arrow-up",
	});
}

export default Component;
