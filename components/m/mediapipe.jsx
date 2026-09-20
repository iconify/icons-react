import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8xnl5bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8xnl5bll"/>`,
		"fallback": "thesvg-color:mediapipe",
	});
}

export default Component;
