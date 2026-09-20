import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx97tgw1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx97tgw1z"/>`,
		"fallback": "uil:triangle",
	});
}

export default Component;
