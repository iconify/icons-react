import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jnk632ntg.css';
import '../../css/d/dpilwv84i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jnk632ntg"/><path class="dpilwv84i"/></g>`,
		"fallback": "hugeicons:toggle-on",
	});
}

export default Component;
