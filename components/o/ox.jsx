import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq28njb1q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq28njb1q"/>`,
		"fallback": "cryptocurrency:ox",
	});
}

export default Component;
