import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzzz-ybzz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nyuapd1pn.css';
import '../../css/s/sc6p5_b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzzz-ybzz secondary"/><g class="dt0cm9dhy primary"><path class="nyuapd1pn"/><path class="sc6p5_b7y"/></g>`,
		"fallback": "iconaut:kettlebell-duo",
	});
}

export default Component;
