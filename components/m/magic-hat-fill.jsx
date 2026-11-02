import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-yt_bclm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-yt_bclm"/>`,
		"fallback": "mingcute:magic-hat-fill",
	});
}

export default Component;
