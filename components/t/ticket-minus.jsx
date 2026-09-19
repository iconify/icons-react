import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f84fu2bbm.css';
import '../../css/g/gxsoq6bke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f84fu2bbm"/><path class="gxsoq6bke"/></g>`,
		"fallback": "hugeicons:ticket-minus",
	});
}

export default Component;
