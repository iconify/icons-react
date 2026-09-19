import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk1dk7bgt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk1dk7bgt"/>`,
		"fallback": "game-icons:jet-pack",
	});
}

export default Component;
