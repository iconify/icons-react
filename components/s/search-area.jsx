import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm2yxmd5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm2yxmd5q"/>`,
		"fallback": "hugeicons:search-area",
	});
}

export default Component;
