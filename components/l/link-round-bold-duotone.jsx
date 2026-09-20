import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yqpfm1bpi.css';
import '../../css/n/n8165b8jf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yqpfm1bpi"/><path class="n8165b8jf"/></g>`,
		"fallback": "solar:link-round-bold-duotone",
	});
}

export default Component;
