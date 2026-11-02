import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it6ez8b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it6ez8b2l"/>`,
		"fallback": "mingcute:layers-2-line",
	});
}

export default Component;
