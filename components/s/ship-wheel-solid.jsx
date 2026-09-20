import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpbk9tr-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpbk9tr-h"/>`,
		"fallback": "mynaui:ship-wheel-solid",
	});
}

export default Component;
