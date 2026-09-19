import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df8ps71ge.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df8ps71ge"/>`,
		"fallback": "game-icons:interstellar-path",
	});
}

export default Component;
