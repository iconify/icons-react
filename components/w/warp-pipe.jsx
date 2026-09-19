import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwwlyvbgx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwwlyvbgx"/>`,
		"fallback": "game-icons:warp-pipe",
	});
}

export default Component;
