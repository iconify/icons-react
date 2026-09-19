import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7lu1v5bf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7lu1v5bf"/>`,
		"fallback": "game-icons:scallop",
	});
}

export default Component;
