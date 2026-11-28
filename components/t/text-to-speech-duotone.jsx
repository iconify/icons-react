import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bqa441h5o.css';
import '../../css/a/ap743jb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bqa441h5o secondary"/><path class="ap743jb3k primary"/></g>`,
		"fallback": "iconaut:text-to-speech-duotone",
	});
}

export default Component;
