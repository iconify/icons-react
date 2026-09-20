import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rozgyib8r.css';
import '../../css/a/aineqab8j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rozgyib8r"/><path class="aineqab8j"/></g>`,
		"fallback": "streamline-color:screen-broadcast",
	});
}

export default Component;
