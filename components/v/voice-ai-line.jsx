import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdq-b1j7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdq-b1j7n"/>`,
		"fallback": "ri:voice-ai-line",
	});
}

export default Component;
