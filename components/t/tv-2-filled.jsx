import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqnmd1o0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqnmd1o0k"/>`,
		"fallback": "tdesign:tv-2-filled",
	});
}

export default Component;
