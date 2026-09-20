import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8ifxvbfz.css';
import '../../css/v/vu0x9mbvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g8ifxvbfz"/><path clip-rule="evenodd" class="vu0x9mbvp"/></g>`,
		"fallback": "reicon:message-minus",
	});
}

export default Component;
