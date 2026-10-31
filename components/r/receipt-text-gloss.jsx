import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1af6gbqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1af6gbqq"/>`,
		"fallback": "withicons:receipt-text-gloss",
	});
}

export default Component;
