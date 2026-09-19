import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdj4pi4uf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdj4pi4uf"/>`,
		"fallback": "game-icons:tipi",
	});
}

export default Component;
