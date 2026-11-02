import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uft_mybdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uft_mybdf"/>`,
		"fallback": "mingcute:twitch-line",
	});
}

export default Component;
