import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/ht47y72rz.css';
import '../../css/l/lls52bcwg.css';
import '../../css/x/x-c9wobbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ht47y72rz"/><path class="lls52bcwg"/><path class="x-c9wobbj"/></g>`,
		"fallback": "iconaut:receipt",
	});
}

export default Component;
