import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxovofq_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxovofq_q"/>`,
		"fallback": "ri:send-plane-2-fill",
	});
}

export default Component;
