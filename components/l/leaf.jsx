import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxnz7abnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxnz7abnc"/>`,
		"fallback": "bx:leaf",
	});
}

export default Component;
