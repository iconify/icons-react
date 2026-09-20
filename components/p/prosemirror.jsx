import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm535xbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm535xbkh"/>`,
		"fallback": "simple-icons:prosemirror",
	});
}

export default Component;
