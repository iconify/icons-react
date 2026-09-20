import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/upq_webea.css';
import '../../css/b/b5haa4bvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="upq_webea"/><path class="b5haa4bvn"/></g>`,
		"fallback": "reicon:wallet-remove-filled",
	});
}

export default Component;
