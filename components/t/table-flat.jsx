import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptterccrf.css';
import '../../css/z/zcopoz6kp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ptterccrf"/><path clip-rule="evenodd" class="zcopoz6kp"/></g>`,
		"fallback": "streamline-flex-color:table-flat",
	});
}

export default Component;
