import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0sq_bx6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0sq_bx6g"/>`,
		"fallback": "hugeicons:text-align-left-01",
	});
}

export default Component;
