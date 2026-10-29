import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hbl-b_bwz.css';
import '../../css/c/cdq-ahbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hbl-b_bwz"/><path class="cdq-ahbxh wm-a"/></g>`,
		"fallback": "withicons:type",
	});
}

export default Component;
