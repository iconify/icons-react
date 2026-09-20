import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z-r8nbftp.css';
import '../../css/f/f9ljvprdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z-r8nbftp"/><path class="f9ljvprdp"/></g>`,
		"fallback": "nrk:volume-x",
	});
}

export default Component;
