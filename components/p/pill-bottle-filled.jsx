import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr54h2ycg.css';
import '../../css/e/e4rr4w_hj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="zr54h2ycg"/><path class="e4rr4w_hj"/>`,
		"fallback": "boxicons:pill-bottle-filled",
	});
}

export default Component;
