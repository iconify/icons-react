import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wed3j8esp.css';
import '../../css/h/hgrvon-wy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wed3j8esp"/><path clip-rule="evenodd" class="hgrvon-wy"/></g>`,
		"fallback": "streamline-color:jump-object-flat",
	});
}

export default Component;
