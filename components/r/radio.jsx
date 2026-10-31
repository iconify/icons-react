import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qv7i33bwb.css';
import '../../css/g/g6jn0f_wp.css';
import '../../css/p/pf80ohbvj.css';
import '../../css/w/wz6jtvbwn.css';
import '../../css/u/uasvcgbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qv7i33bwb wm-shadow"/><path class="g6jn0f_wp wm-shadow"/><path class="pf80ohbvj"/><path class="wz6jtvbwn"/><path class="uasvcgbgp"/></g>`,
		"fallback": "withicons-brutal:radio",
	});
}

export default Component;
