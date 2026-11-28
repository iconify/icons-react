import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf26wacpe.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x6-qk2bjk.css';
import '../../css/b/biix0ugvx.css';
import '../../css/c/coc26zbtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary uf26wacpe"/><g class="dt0cm9dhy primary"><path class="x6-qk2bjk"/><path class="biix0ugvx"/><path class="coc26zbtk"/></g>`,
		"fallback": "iconaut:paint-roller-duo",
	});
}

export default Component;
