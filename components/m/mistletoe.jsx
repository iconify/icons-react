import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ucjy35kxu.css';
import '../../css/z/zh0vz4b_l.css';
import '../../css/e/e1rcv47xv.css';
import '../../css/d/dcyqs4olz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ucjy35kxu wm-k"/><path class="wm-a zh0vz4b_l"/><path class="e1rcv47xv wm-s"/><path class="dcyqs4olz"/></g>`,
		"fallback": "withicons-bauhaus:mistletoe",
	});
}

export default Component;
