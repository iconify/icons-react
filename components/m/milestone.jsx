import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zdu-dcbfe.css';
import '../../css/f/fon0b9_ly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zdu-dcbfe"/><path class="fon0b9_ly"/></g>`,
		"fallback": "iconaut:milestone",
	});
}

export default Component;
