import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cixjz6bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cixjz6bqi"/>`,
		"fallback": "majesticons:t-shirt-line",
	});
}

export default Component;
