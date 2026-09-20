import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl5mm0lik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl5mm0lik"/>`,
		"fallback": "solar:move-outline",
	});
}

export default Component;
