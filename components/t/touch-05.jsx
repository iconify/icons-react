import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0-d_4-vv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0-d_4-vv"/>`,
		"fallback": "hugeicons:touch-05",
	});
}

export default Component;
