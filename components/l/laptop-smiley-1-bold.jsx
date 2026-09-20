import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypwzazrln.css';
import '../../css/d/dr7uw4h1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypwzazrln"/><path class="dr7uw4h1i"/>`,
		"fallback": "streamline-ultimate:laptop-smiley-1-bold",
	});
}

export default Component;
