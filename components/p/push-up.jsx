import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxwgl5-1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sxwgl5-1z"/>`,
		"fallback": "gg:push-up",
	});
}

export default Component;
