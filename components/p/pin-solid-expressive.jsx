import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r24kkipho.css';
import '../../css/z/zsx8s-bgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r24kkipho"/><path clip-rule="evenodd" class="zsx8s-bgq"/></g>`,
		"fallback": "nrk:pin-solid-expressive",
	});
}

export default Component;
