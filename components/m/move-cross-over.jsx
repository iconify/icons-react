import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an5sm2bsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="an5sm2bsh"/>`,
		"fallback": "streamline-freehand:move-cross-over",
	});
}

export default Component;
