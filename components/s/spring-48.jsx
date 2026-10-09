import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf14hib5q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf14hib5q"/>`,
		"fallback": "energy-icons:spring-48",
	});
}

export default Component;
