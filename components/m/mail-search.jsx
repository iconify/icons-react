import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lja14ubmb.css';
import '../../css/i/i8qwfhbaq.css';
import '../../css/a/az8-3mbve.css';
import '../../css/j/j8u73rbox.css';
import '../../css/h/h13m8zbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lja14ubmb wm-k"/><path class="i8qwfhbaq wm-s"/><path class="az8-3mbve"/><path class="j8u73rbox"/><path class="h13m8zbqo wm-s"/></g>`,
		"fallback": "withicons-bauhaus:mail-search",
	});
}

export default Component;
