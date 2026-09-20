import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk95g98tl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nk95g98tl"/>`,
		"fallback": "streamline-freehand:laptop-action-flash",
	});
}

export default Component;
