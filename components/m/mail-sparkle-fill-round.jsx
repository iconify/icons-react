import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp11kbk4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp11kbk4z"/>`,
		"fallback": "coolicons:mail-sparkle-fill-round",
	});
}

export default Component;
