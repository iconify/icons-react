import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thluib7ry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thluib7ry"/>`,
		"fallback": "hugeicons:low-signal",
	});
}

export default Component;
