import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s2p-8pbqy.css';
import '../../css/y/y3_xbkbfz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s2p-8pbqy"/><path clip-rule="evenodd" class="y3_xbkbfz"/></g>`,
		"fallback": "streamline-flex-color:tablet-capsule-flat",
	});
}

export default Component;
