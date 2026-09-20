import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gulm8gb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gulm8gb1q"/>`,
		"fallback": "majesticons:search-line",
	});
}

export default Component;
