import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8ydtvn7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8ydtvn7y"/>`,
		"fallback": "mingcute:partly-cloud-night-line",
	});
}

export default Component;
