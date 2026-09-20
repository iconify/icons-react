import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7gtsxy4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7gtsxy4k"/>`,
		"fallback": "stash:trend-arrow-up-light",
	});
}

export default Component;
