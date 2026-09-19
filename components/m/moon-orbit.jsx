import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp_tt3b4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp_tt3b4i"/>`,
		"fallback": "game-icons:moon-orbit",
	});
}

export default Component;
