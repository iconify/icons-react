import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqj779b0u.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqj779b0u"/>`,
		"fallback": "wi:owm-day-612",
	});
}

export default Component;
