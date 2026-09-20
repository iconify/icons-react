import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-v5tybll.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t-v5tybll"/>`,
		"fallback": "streamline:sail-ship-remix",
	});
}

export default Component;
