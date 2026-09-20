import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1ttgccey.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1ttgccey"/>`,
		"fallback": "streamline-pixel:social-rewards-rating-star-1",
	});
}

export default Component;
