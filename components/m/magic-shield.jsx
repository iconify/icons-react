import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2w4e9bzn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2w4e9bzn"/>`,
		"fallback": "game-icons:magic-shield",
	});
}

export default Component;
