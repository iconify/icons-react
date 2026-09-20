import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-behhx3u.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-behhx3u"/>`,
		"fallback": "wi:night-cloudy-high",
	});
}

export default Component;
