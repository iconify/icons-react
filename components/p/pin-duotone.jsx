import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c8mic-b2n.css';
import '../../css/s/sgu59-ekm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c8mic-b2n"/><path class="sgu59-ekm"/></g>`,
		"fallback": "reicon:pin-duotone",
	});
}

export default Component;
