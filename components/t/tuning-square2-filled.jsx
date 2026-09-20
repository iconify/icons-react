import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/imfl8_kmj.css';
import '../../css/l/le079ac1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="imfl8_kmj"/><path clip-rule="evenodd" class="le079ac1u"/></g>`,
		"fallback": "reicon:tuning-square2-filled",
	});
}

export default Component;
