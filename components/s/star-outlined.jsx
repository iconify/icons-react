import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbgxo8jma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbgxo8jma"/>`,
		"fallback": "weui:star-outlined",
	});
}

export default Component;
