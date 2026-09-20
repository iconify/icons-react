import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8_lrlbzs.css';
import '../../css/q/qa5-w9hvv.css';
import '../../css/b/b5hu-ubrz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u8_lrlbzs"/><path class="qa5-w9hvv"/><path class="b5hu-ubrz"/></g>`,
		"fallback": "streamline-color:parking-sign",
	});
}

export default Component;
