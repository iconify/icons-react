import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/ralru1bvw.css';
import '../../css/u/u4sxwwy9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ralru1bvw"/><path class="u4sxwwy9k"/></g>`,
		"fallback": "hugeicons:panel-bottom-dashed",
	});
}

export default Component;
