import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgu-vcc3y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgu-vcc3y"/>`,
		"fallback": "game-icons:walking-scout",
	});
}

export default Component;
