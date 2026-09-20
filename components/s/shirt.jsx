import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8g0c7xnb.css';
import '../../css/l/l0dlcioew.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u8g0c7xnb"/><path class="l0dlcioew"/></g>`,
		"fallback": "streamline-flex-color:shirt",
	});
}

export default Component;
