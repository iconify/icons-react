import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbk7jibmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbk7jibmu"/>`,
		"fallback": "mingcute:rewind-backward-square-5-line",
	});
}

export default Component;
