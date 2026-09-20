import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h0jv6pbln.css';
import '../../css/f/fab031bju.css';
import '../../css/b/bwtd6wb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h0jv6pbln"/><path class="fab031bju"/><path class="bwtd6wb2e"/></g>`,
		"fallback": "reicon:video-slash-filled",
	});
}

export default Component;
