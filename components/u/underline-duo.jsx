import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bgetl3bek.css';
import '../../css/z/z66o58b1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bgetl3bek"/><path class="z66o58b1u"/></g>`,
		"fallback": "iconaut:underline-duo",
	});
}

export default Component;
