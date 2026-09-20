import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ieo4nfb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ieo4nfb1k"/>`,
		"fallback": "ri:timer-2-line",
	});
}

export default Component;
