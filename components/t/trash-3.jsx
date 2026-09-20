import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im2wm0ppx.css';
import '../../css/o/oi_6x_b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im2wm0ppx"/><path class="oi_6x_b8r"/>`,
		"fallback": "lineicons:trash-3",
	});
}

export default Component;
