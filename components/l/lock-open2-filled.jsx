import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nkh98zbiz.css';
import '../../css/i/i256q9bxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nkh98zbiz"/><path class="i256q9bxs"/></g>`,
		"fallback": "reicon:lock-open2-filled",
	});
}

export default Component;
