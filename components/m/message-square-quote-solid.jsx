import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp8q8eb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp8q8eb_n"/>`,
		"fallback": "iconaut:message-square-quote-solid",
	});
}

export default Component;
