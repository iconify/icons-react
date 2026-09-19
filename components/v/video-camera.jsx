import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb4nc0b1n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb4nc0b1n"/>`,
		"fallback": "game-icons:video-camera",
	});
}

export default Component;
