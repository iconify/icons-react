import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ecxurxb5b.css';
import '../../css/u/utjxe-ive.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ecxurxb5b"/><path class="utjxe-ive"/></g>`,
		"fallback": "reicon:truck-remove-filled",
	});
}

export default Component;
