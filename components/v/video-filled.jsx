import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s98k5ybiu.css';
import '../../css/o/oaonj8bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s98k5ybiu"/><path class="oaonj8bqn"/></g>`,
		"fallback": "tabler:video-filled",
	});
}

export default Component;
