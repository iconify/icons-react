import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-2nhuhvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-2nhuhvr"/>`,
		"fallback": "iconoir:ruler",
	});
}

export default Component;
