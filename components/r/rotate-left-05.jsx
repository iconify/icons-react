import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djmzdub0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djmzdub0c"/>`,
		"fallback": "hugeicons:rotate-left-05",
	});
}

export default Component;
