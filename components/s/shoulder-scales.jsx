import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbl3c2qzk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbl3c2qzk"/>`,
		"fallback": "game-icons:shoulder-scales",
	});
}

export default Component;
