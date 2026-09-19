import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8m-vw4_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8m-vw4_n"/>`,
		"fallback": "game-icons:siege-ram",
	});
}

export default Component;
