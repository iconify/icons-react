import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciso7_9bo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciso7_9bo"/>`,
		"fallback": "iconaut:mail-asterisk-solid",
	});
}

export default Component;
