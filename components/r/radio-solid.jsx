import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sx8np_ysl.css';
import '../../css/y/yp5ccibkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sx8np_ysl"/><path class="yp5ccibkt"/></g>`,
		"fallback": "iconaut:radio-solid",
	});
}

export default Component;
