import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-l1pd0_w.css';
import '../../css/w/w8-52275l.css';
import '../../css/h/h-8trubgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h-l1pd0_w"><path clip-rule="evenodd" class="w8-52275l"/><path class="h-8trubgp"/></g>`,
		"fallback": "iconoir:keyframe-plus-solid",
	});
}

export default Component;
