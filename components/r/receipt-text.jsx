import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/ht47y72rz.css';
import '../../css/c/ciddswfer.css';
import '../../css/q/qhh_2fphk.css';
import '../../css/e/ekwgngs3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ht47y72rz"/><path class="ciddswfer"/><path class="qhh_2fphk"/><path class="ekwgngs3g"/></g>`,
		"fallback": "iconaut:receipt-text",
	});
}

export default Component;
