import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilzi5vbkw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilzi5vbkw"/>`,
		"fallback": "game-icons:striking-balls",
	});
}

export default Component;
