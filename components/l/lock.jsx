import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/thvrl_b5e.css';
import '../../css/m/mkdyumbaw.css';
import '../../css/k/kzbjxkbod.css';
import '../../css/b/bx4l1wbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="thvrl_b5e wm-shadow"/><path class="mkdyumbaw wm-shadow"/><path class="kzbjxkbod"/><path class="bx4l1wbwz"/></g>`,
		"fallback": "withicons-brutal:lock",
	});
}

export default Component;
