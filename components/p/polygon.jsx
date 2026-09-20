import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cp5vo7b9z.css';
import '../../css/f/f4chlbnwp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cp5vo7b9z"/><path class="f4chlbnwp"/></g>`,
		"fallback": "streamline-color:polygon",
	});
}

export default Component;
