import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnbc61mfs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnbc61mfs"/>`,
		"fallback": "game-icons:thermometer-cold",
	});
}

export default Component;
