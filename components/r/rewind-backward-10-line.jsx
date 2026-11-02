import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz2g41okh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz2g41okh"/>`,
		"fallback": "mingcute:rewind-backward-10-line",
	});
}

export default Component;
