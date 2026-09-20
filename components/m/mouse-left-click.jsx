import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qodb1q9bw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qodb1q9bw"/>`,
		"fallback": "mdi:mouse-left-click",
	});
}

export default Component;
