import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhy3c0lxj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhy3c0lxj"/>`,
		"fallback": "game-icons:scarab-beetle",
	});
}

export default Component;
