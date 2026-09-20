import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/feuyj31wv.css';
import '../../css/f/fg3udub2c.css';
import '../../css/y/ydv50kk3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="feuyj31wv"/><path class="fg3udub2c"/><path class="ydv50kk3t"/></g>`,
		"fallback": "solar:lock-keyhole-minimalistic-unlocked-bold-duotone",
	});
}

export default Component;
