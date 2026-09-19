import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-8gv7b0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-8gv7b0n"/>`,
		"fallback": "game-icons:stone-throne",
	});
}

export default Component;
