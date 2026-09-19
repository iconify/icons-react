import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xin-pnb_m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xin-pnb_m"/>`,
		"fallback": "game-icons:velociraptor-tracks",
	});
}

export default Component;
