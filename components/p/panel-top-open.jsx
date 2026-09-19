import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u4sxwwy9k.css';
import '../../css/k/kwhw-7bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u4sxwwy9k"/><path class="kwhw-7bik"/></g>`,
		"fallback": "hugeicons:panel-top-open",
	});
}

export default Component;
