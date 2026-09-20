import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kzig_cb2h.css';
import '../../css/k/kgk1kac4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kzig_cb2h"/><path class="kgk1kac4s"/></g>`,
		"fallback": "si:thumb-down-alt-2-duotone",
	});
}

export default Component;
