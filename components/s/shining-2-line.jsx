import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1mnnn-xn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1mnnn-xn"/>`,
		"fallback": "ri:shining-2-line",
	});
}

export default Component;
