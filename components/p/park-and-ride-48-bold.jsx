import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hngnej2uq.css';
import '../../css/e/e-pq-g8jr.css';
import '../../css/c/crbcydbuy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hngnej2uq"/><path class="e-pq-g8jr"/><path class="crbcydbuy"/>`,
		"fallback": "energy-icons:park-and-ride-48-bold",
	});
}

export default Component;
