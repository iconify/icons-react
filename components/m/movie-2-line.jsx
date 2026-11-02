import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzyj9h1zy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzyj9h1zy"/>`,
		"fallback": "mingcute:movie-2-line",
	});
}

export default Component;
