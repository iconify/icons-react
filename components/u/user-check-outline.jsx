import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kk0vstd2z.css';
import '../../css/o/oj_mamo0x.css';
import '../../css/t/t15s7cbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kk0vstd2z"/><path class="oj_mamo0x"/><path clip-rule="evenodd" class="t15s7cbev"/></g>`,
		"fallback": "solar:user-check-outline",
	});
}

export default Component;
