import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifj53obbv.css';
import '../../css/j/jncii58ox.css';
import '../../css/h/hj54y7b4k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ifj53obbv"/><path class="jncii58ox"/><path class="hj54y7b4k"/></g>`,
		"fallback": "streamline-flex-color:padlock-square-1",
	});
}

export default Component;
