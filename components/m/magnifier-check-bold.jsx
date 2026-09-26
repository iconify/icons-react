import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv054966h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lv054966h"/>`,
		"fallback": "solar:magnifier-check-bold",
	});
}

export default Component;
