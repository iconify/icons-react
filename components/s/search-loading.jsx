import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tq-z5t1rp.css';
import '../../css/j/jgnk0_ecg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tq-z5t1rp"/><path clip-rule="evenodd" class="jgnk0_ecg"/></g>`,
		"fallback": "gg:search-loading",
	});
}

export default Component;
