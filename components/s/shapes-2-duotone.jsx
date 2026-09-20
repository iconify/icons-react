import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ko45wjbye.css';
import '../../css/d/dl3qxj56t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ko45wjbye"/><path class="dl3qxj56t"/></g>`,
		"fallback": "keyline-icons:shapes-2-duotone",
	});
}

export default Component;
