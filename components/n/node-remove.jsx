import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h28-skbwv.css';
import '../../css/b/b7rjdgn0s.css';
import '../../css/l/ly00bcc9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h28-skbwv"/><path class="b7rjdgn0s"/><path class="ly00bcc9b"/></g>`,
		"fallback": "hugeicons:node-remove",
	});
}

export default Component;
