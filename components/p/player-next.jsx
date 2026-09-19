import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dytf-3bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dytf-3bsy"/>`,
		"fallback": "iconamoon:player-next",
	});
}

export default Component;
