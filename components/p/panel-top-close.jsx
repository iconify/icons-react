import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u4sxwwy9k.css';
import '../../css/h/h5u2qet5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u4sxwwy9k"/><path class="h5u2qet5h"/></g>`,
		"fallback": "hugeicons:panel-top-close",
	});
}

export default Component;
