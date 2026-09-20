import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ajfk-ob1k.css';
import '../../css/w/wpm_ts59c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ajfk-ob1k"/><path clip-rule="evenodd" class="wpm_ts59c"/></g>`,
		"fallback": "reicon:medal-stars-duotone",
	});
}

export default Component;
