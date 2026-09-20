import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j9yk4t27z.css';
import '../../css/r/rs7cn0ytp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j9yk4t27z"/><path clip-rule="evenodd" class="rs7cn0ytp"/></g>`,
		"fallback": "reicon:phone-cancel2",
	});
}

export default Component;
