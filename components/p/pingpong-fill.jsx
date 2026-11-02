import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6a4mhboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6a4mhboy"/>`,
		"fallback": "mingcute:pingpong-fill",
	});
}

export default Component;
