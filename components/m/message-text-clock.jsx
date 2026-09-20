import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o11xs_bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o11xs_bqt"/>`,
		"fallback": "mdi:message-text-clock",
	});
}

export default Component;
