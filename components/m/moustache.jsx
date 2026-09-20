import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8i14ypiz.css';
import '../../css/f/f-6_zvbwo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e8i14ypiz"/><path class="f-6_zvbwo"/></g>`,
		"fallback": "streamline-flex-color:moustache",
	});
}

export default Component;
