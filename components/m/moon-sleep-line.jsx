import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9sfw7l0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9sfw7l0l"/>`,
		"fallback": "mingcute:moon-sleep-line",
	});
}

export default Component;
