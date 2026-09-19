import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dpqak-bcu.css';
import '../../css/u/u4sxwwy9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dpqak-bcu"/><path class="u4sxwwy9k"/></g>`,
		"fallback": "hugeicons:rows-3",
	});
}

export default Component;
