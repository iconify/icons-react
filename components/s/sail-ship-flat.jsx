import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/muncqobnk.css';
import '../../css/j/je1p9npeh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="muncqobnk"/><path class="je1p9npeh"/></g>`,
		"fallback": "streamline-color:sail-ship-flat",
	});
}

export default Component;
