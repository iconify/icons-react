import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hyjq3ibzx.css';
import '../../css/j/j3qz157fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hyjq3ibzx"/><path class="j3qz157fz"/></g>`,
		"fallback": "feather:mail",
	});
}

export default Component;
