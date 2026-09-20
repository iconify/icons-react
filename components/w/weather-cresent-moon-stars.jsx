import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzn1vy6ys.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzn1vy6ys"/>`,
		"fallback": "streamline-pixel:weather-cresent-moon-stars",
	});
}

export default Component;
