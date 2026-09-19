import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cn7oi9-ou.css';
import '../../css/c/cjcuh_i5u.css';
import '../../css/f/fsshfvbco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cn7oi9-ou"/><circle transform="rotate(-180 11 11)" class="cjcuh_i5u"/><path class="fsshfvbco"/></g>`,
		"fallback": "iconamoon:pen-thin",
	});
}

export default Component;
