import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1n9x_bgf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j1n9x_bgf"/>`,
		"fallback": "streamline:shredder-remix",
	});
}

export default Component;
