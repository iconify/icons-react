import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv3px3bgy.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv3px3bgy"/>`,
		"fallback": "jam:pie-chart-f",
	});
}

export default Component;
