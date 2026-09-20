import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/n/nnqkbpbmy.css';
import '../../css/u/ufx2yzbko.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="nnqkbpbmy"/><path class="ufx2yzbko"/></g>`,
		"fallback": "streamline-stickies-color:love-duo",
	});
}

export default Component;
