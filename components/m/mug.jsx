import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/delqnrbzm.css';
import '../../css/j/j_fa22bmn.css';
import '../../css/m/mbzmyys3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="delqnrbzm"/><path class="j_fa22bmn"/><path class="mbzmyys3e"/></g>`,
		"fallback": "iconaut:mug",
	});
}

export default Component;
