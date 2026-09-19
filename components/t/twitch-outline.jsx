import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py1q_xb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="py1q_xb1p"/>`,
		"fallback": "basil:twitch-outline",
	});
}

export default Component;
