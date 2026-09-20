import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ikq5hqm9i.css';
import '../../css/k/k6heqfsxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ikq5hqm9i"/><path clip-rule="evenodd" class="k6heqfsxb"/></g>`,
		"fallback": "reicon:square-share-filled",
	});
}

export default Component;
