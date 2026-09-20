import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fs1y37bzy.css';
import '../../css/q/qakf96ufz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fs1y37bzy"/><path class="qakf96ufz"/></g>`,
		"fallback": "reicon:printer2",
	});
}

export default Component;
