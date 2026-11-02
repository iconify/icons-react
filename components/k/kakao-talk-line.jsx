import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glq0v05nm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glq0v05nm"/>`,
		"fallback": "mingcute:kakao-talk-line",
	});
}

export default Component;
