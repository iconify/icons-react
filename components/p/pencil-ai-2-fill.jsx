import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcv7r2bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcv7r2bxk"/>`,
		"fallback": "ri:pencil-ai-2-fill",
	});
}

export default Component;
