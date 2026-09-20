import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gbi35-b1q.css';
import '../../css/f/fafky8odj.css';
import '../../css/l/lgp6ae1_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gbi35-b1q"/><path class="fafky8odj"/><path class="lgp6ae1_u"/></g>`,
		"fallback": "reicon:note-square-filled",
	});
}

export default Component;
