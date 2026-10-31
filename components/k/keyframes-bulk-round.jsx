import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lhu51pbnn.css';
import '../../css/v/vrb0-gbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lhu51pbnn"/><path class="vrb0-gbcf"/></g>`,
		"fallback": "coolicons:keyframes-bulk-round",
	});
}

export default Component;
