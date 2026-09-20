import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n46lckbwm.css';
import '../../css/l/lkz9s3c5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n46lckbwm"/><path class="lkz9s3c5l"/></g>`,
		"fallback": "reicon:ticket-duotone",
	});
}

export default Component;
