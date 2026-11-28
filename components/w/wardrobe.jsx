import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n7r7azbdm.css';
import '../../css/a/af2wjebts.css';
import '../../css/w/w8cjkffza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="n7r7azbdm"/><path class="af2wjebts"/><path class="w8cjkffza"/></g>`,
		"fallback": "iconaut:wardrobe",
	});
}

export default Component;
