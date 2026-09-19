import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mx9n3yb_i.css';
import '../../css/k/k0hfabcko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mx9n3yb_i"/><path class="k0hfabcko"/></g>`,
		"fallback": "hugeicons:mouse-18",
	});
}

export default Component;
