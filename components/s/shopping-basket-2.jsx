import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g1s29abhl.css';
import '../../css/x/xp_6k32rr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g1s29abhl"/><path class="xp_6k32rr"/></g>`,
		"fallback": "streamline-flex-color:shopping-basket-2",
	});
}

export default Component;
