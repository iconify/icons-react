import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qgtlqnbqw.css';
import '../../css/q/qhg74ztci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qgtlqnbqw"/><path class="qhg74ztci"/></g>`,
		"fallback": "heroicons:user-group-solid",
	});
}

export default Component;
