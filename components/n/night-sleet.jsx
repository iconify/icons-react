import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnq8kx7dd.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnq8kx7dd"/>`,
		"fallback": "wi:night-sleet",
	});
}

export default Component;
