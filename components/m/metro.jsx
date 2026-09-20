import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1vn95naj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1vn95naj"/>`,
		"fallback": "mdi:metro",
	});
}

export default Component;
