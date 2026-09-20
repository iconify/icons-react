import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvf7gwbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvf7gwbns"/>`,
		"fallback": "tabler:swipe-left-filled",
	});
}

export default Component;
