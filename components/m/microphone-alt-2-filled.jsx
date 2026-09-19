import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp2y35std.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp2y35std"/>`,
		"fallback": "boxicons:microphone-alt-2-filled",
	});
}

export default Component;
