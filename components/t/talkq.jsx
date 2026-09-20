import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rymd8jx_q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rymd8jx_q"/>`,
		"fallback": "raphael:talkq",
	});
}

export default Component;
