import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np0bznz7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np0bznz7f"/>`,
		"fallback": "mingcute:mail-send-line",
	});
}

export default Component;
