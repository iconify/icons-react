import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0dut0-fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0dut0-fi"/>`,
		"fallback": "ri:painting-ai-line",
	});
}

export default Component;
