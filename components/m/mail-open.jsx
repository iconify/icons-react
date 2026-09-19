import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lypp8ec4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lypp8ec4z"/>`,
		"fallback": "humbleicons:mail-open",
	});
}

export default Component;
