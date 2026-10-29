import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wgcstei8u.css';
import '../../css/t/tsi5nvbml.css';
import '../../css/i/iycs7wjzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wgcstei8u"/><path class="tsi5nvbml wm-a"/><path class="iycs7wjzl"/></g>`,
		"fallback": "withicons:mushroom-duo",
	});
}

export default Component;
