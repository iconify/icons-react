import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z67c-1big.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z67c-1big"/>`,
		"fallback": "dashicons:phone",
	});
}

export default Component;
