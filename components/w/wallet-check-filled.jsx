import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f8n958bmo.css';
import '../../css/b/b5haa4bvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f8n958bmo"/><path class="b5haa4bvn"/></g>`,
		"fallback": "reicon:wallet-check-filled",
	});
}

export default Component;
