import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8wh6ihst.css';
import '../../css/c/cd1qz4bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8wh6ihst"/><path class="cd1qz4bbk"/>`,
		"fallback": "bx:mail-send",
	});
}

export default Component;
