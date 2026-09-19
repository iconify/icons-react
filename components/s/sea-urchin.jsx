import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh4s1z2xe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh4s1z2xe"/>`,
		"fallback": "game-icons:sea-urchin",
	});
}

export default Component;
