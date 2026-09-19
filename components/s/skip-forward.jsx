import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yr6oyzbva.css';
import '../../css/b/b6ryy2bnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yr6oyzbva"/><path class="b6ryy2bnt"/></g>`,
		"fallback": "hugeicons:skip-forward",
	});
}

export default Component;
