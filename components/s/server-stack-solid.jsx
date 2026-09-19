import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b8_1u2bay.css';
import '../../css/t/twm24obkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b8_1u2bay"/><path clip-rule="evenodd" class="twm24obkw"/></g>`,
		"fallback": "heroicons:server-stack-solid",
	});
}

export default Component;
