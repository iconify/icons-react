import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq8fi23ln.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq8fi23ln"/>`,
		"fallback": "game-icons:nuclear",
	});
}

export default Component;
