import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ix-rh6d1k.css';
import '../../css/g/g_ndkpboa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ix-rh6d1k"/><path clip-rule="evenodd" class="g_ndkpboa"/></g>`,
		"fallback": "streamline-flex-color:play-list-6-flat",
	});
}

export default Component;
