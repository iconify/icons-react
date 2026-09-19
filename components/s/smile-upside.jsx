import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y8295bhap.css';
import '../../css/h/hqpmt9b9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y8295bhap"/><path clip-rule="evenodd" class="hqpmt9b9m"/></g>`,
		"fallback": "gg:smile-upside",
	});
}

export default Component;
