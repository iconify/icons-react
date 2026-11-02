import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4uuzxt7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4uuzxt7l"/>`,
		"fallback": "mingcute:user-follow-line",
	});
}

export default Component;
