import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gxsoq6bke.css';
import '../../css/v/vyaswcbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gxsoq6bke"/><path class="vyaswcbsy"/></g>`,
		"fallback": "hugeicons:ticket-slash",
	});
}

export default Component;
