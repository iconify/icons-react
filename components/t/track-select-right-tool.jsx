import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/io05-fudh.css';
import '../../css/u/uupibabxt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="io05-fudh"/><path class="uupibabxt"/></g>`,
		"fallback": "streamline-flex-color:track-select-right-tool",
	});
}

export default Component;
