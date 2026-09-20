import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5fxf3tgj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j5fxf3tgj"/>`,
		"fallback": "streamline:mail-incoming-remix",
	});
}

export default Component;
