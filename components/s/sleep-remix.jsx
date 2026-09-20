import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqd7-fwmh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lqd7-fwmh"/>`,
		"fallback": "streamline:sleep-remix",
	});
}

export default Component;
