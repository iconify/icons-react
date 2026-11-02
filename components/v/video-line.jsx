import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sevvhuk-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sevvhuk-q"/>`,
		"fallback": "mingcute:video-line",
	});
}

export default Component;
