import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxovt7blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxovt7blt"/>`,
		"fallback": "weui:keyboard-filled",
	});
}

export default Component;
