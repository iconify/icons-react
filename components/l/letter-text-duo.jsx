import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f7x2lbcjo.css';
import '../../css/x/xsa1whbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f7x2lbcjo"/><path class="xsa1whbdc"/></g>`,
		"fallback": "iconaut:letter-text-duo",
	});
}

export default Component;
