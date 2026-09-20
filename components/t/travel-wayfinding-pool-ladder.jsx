import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blawj9z5c.css';
import '../../css/c/czqdhwn7q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blawj9z5c"/><path class="czqdhwn7q"/>`,
		"fallback": "streamline-pixel:travel-wayfinding-pool-ladder",
	});
}

export default Component;
