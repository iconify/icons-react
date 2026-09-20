import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8r0ucb_k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l8r0ucb_k"/>`,
		"fallback": "streamline:threat-document-remix",
	});
}

export default Component;
