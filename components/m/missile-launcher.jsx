import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w94jr_bez.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w94jr_bez"/>`,
		"fallback": "game-icons:missile-launcher",
	});
}

export default Component;
