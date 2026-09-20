import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyn8ona3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyn8ona3j"/>`,
		"fallback": "mingcute:rewind-forward-square-5-line",
	});
}

export default Component;
