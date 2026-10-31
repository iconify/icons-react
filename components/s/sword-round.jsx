import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n92ifub3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n92ifub3o"/>`,
		"fallback": "coolicons:sword-round",
	});
}

export default Component;
