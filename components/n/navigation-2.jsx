import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lvdi9vbyy.css';
import '../../css/i/ikfdhw39k.css';
import '../../css/t/tvc8c8brf.css';
import '../../css/o/or-2tunoi.css';
import '../../css/y/ylpzvd3mu.css';
import '../../css/x/x7rzzrbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="lvdi9vbyy wm-shadow"/><path class="ikfdhw39k"/><path class="tvc8c8brf"/><path class="or-2tunoi"/><path class="wm-shine ylpzvd3mu"/><path class="wm-deco x7rzzrbin"/></g>`,
		"fallback": "withicons-sticker:navigation-2",
	});
}

export default Component;
