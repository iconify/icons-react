import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gu0s_0bwe.css';
import '../../css/w/wwhor6wqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gu0s_0bwe"/><path class="wwhor6wqd"/></g>`,
		"fallback": "coolicons:paint-bucket-bulk-round",
	});
}

export default Component;
