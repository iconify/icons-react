import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa3lzv8-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa3lzv8-w"/>`,
		"fallback": "iconamoon:player-pause",
	});
}

export default Component;
