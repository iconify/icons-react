import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ingj11ljg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ingj11ljg"/>`,
		"fallback": "bxs:message-rounded",
	});
}

export default Component;
