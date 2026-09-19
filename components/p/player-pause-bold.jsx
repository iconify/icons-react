import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2lsc3b7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2lsc3b7w"/>`,
		"fallback": "iconamoon:player-pause-bold",
	});
}

export default Component;
