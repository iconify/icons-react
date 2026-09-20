import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yl-2jde-j.css';
import '../../css/j/j8wpycc_k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yl-2jde-j"/><path class="j8wpycc_k"/></g>`,
		"fallback": "streamline-color:street-sign",
	});
}

export default Component;
