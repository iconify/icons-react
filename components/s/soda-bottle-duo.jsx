import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgcuqud9f.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pp2fsffpp.css';
import '../../css/c/c83_f-2nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary wgcuqud9f"/><g class="dt0cm9dhy primary"><path class="pp2fsffpp"/><path class="c83_f-2nk"/></g>`,
		"fallback": "iconaut:soda-bottle-duo",
	});
}

export default Component;
