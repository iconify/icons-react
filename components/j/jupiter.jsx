import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5w9ww-gj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5w9ww-gj"/>`,
		"fallback": "game-icons:jupiter",
	});
}

export default Component;
