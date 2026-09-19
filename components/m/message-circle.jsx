import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m35tg7k6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m35tg7k6j"/>`,
		"fallback": "ci:message-circle",
	});
}

export default Component;
