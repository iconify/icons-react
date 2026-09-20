import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbn8w3bbd.css';
import '../../css/f/fndt71bnz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hbn8w3bbd"/><path class="fndt71bnz"/></g>`,
		"fallback": "streamline-color:module-three",
	});
}

export default Component;
