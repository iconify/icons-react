import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/etniuejqw.css';
import '../../css/w/wyhx7jhuz.css';
import '../../css/s/sav-igbqq.css';
import '../../css/g/gr0rj4wlt.css';
import '../../css/c/c0yo_c7dk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="etniuejqw"/><path class="wyhx7jhuz"/><path class="sav-igbqq"/><path class="gr0rj4wlt"/><path class="c0yo_c7dk"/></g>`,
		"fallback": "solar:list-collapse-minimalistic-bold",
	});
}

export default Component;
