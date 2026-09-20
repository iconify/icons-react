import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2g7scb2e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c2g7scb2e"/>`,
		"fallback": "streamline:toilet-man-solid",
	});
}

export default Component;
