import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l61alz7vg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l61alz7vg"/>`,
		"fallback": "game-icons:jet-fighter",
	});
}

export default Component;
