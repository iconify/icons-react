import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl88qba3g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl88qba3g"/>`,
		"fallback": "game-icons:magic-potion",
	});
}

export default Component;
