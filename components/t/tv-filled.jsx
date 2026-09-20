import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g9z41_bao.css';
import '../../css/c/cfjco3qlg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g9z41_bao"/><path class="cfjco3qlg"/></g>`,
		"fallback": "reicon:tv-filled",
	});
}

export default Component;
