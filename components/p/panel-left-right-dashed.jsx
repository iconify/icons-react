import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lo92hvbun.css';
import '../../css/u/u4sxwwy9k.css';
import '../../css/c/cqsfoebtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lo92hvbun"/><path class="u4sxwwy9k"/><path class="cqsfoebtm"/></g>`,
		"fallback": "hugeicons:panel-left-right-dashed",
	});
}

export default Component;
