import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy0s0bcut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy0s0bcut"/>`,
		"fallback": "thesvg-color:lot-polish-airlines",
	});
}

export default Component;
