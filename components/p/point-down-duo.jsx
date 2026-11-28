import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy5xq7bcb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/benk10bho.css';
import '../../css/b/b19ralbgb.css';
import '../../css/t/tocme9f-q.css';
import '../../css/m/m7hubbako.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary xy5xq7bcb"/><g class="dt0cm9dhy primary"><path class="benk10bho"/><path class="b19ralbgb"/><path class="tocme9f-q"/><path class="m7hubbako"/></g>`,
		"fallback": "iconaut:point-down-duo",
	});
}

export default Component;
