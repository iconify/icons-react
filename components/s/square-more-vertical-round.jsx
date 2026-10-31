import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4u7q7bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4u7q7bzf"/>`,
		"fallback": "coolicons:square-more-vertical-round",
	});
}

export default Component;
