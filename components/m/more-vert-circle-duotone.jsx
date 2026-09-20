import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zmnjdabrt.css';
import '../../css/y/yooflcckh.css';
import '../../css/t/t-1ug4bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zmnjdabrt"/><path class="yooflcckh"/><path class="t-1ug4bof"/></g>`,
		"fallback": "si:more-vert-circle-duotone",
	});
}

export default Component;
