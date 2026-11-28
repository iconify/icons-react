import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgb017bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgb017bps"/>`,
		"fallback": "noviair:line-chart-search",
	});
}

export default Component;
