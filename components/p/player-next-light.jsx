import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u834x3b1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u834x3b1g"/>`,
		"fallback": "iconamoon:player-next-light",
	});
}

export default Component;
