import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tib28zb9m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tib28zb9m"/>`,
		"fallback": "game-icons:ringing-alarm",
	});
}

export default Component;
