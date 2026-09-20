import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cf4ye0b3a.css';
import '../../css/y/y7v3j3xwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cf4ye0b3a"/><path class="y7v3j3xwf"/></g>`,
		"fallback": "reicon:notebook-bookmark-filled",
	});
}

export default Component;
