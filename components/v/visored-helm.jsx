import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb2fnotud.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb2fnotud"/>`,
		"fallback": "game-icons:visored-helm",
	});
}

export default Component;
