import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kvcarjb4k.css';
import '../../css/f/f_jv24u5v.css';
import '../../css/t/th9lkcl4y.css';
import '../../css/a/adse7vy0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kvcarjb4k"/><path class="f_jv24u5v"/><path class="th9lkcl4y"/><path class="adse7vy0m"/></g>`,
		"fallback": "iconaut:sofa",
	});
}

export default Component;
