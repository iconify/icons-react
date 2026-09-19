import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odn0cubmr.css';
import '../../css/k/kbgn2obeo.css';
import '../../css/f/fnb9a-75o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odn0cubmr"/><path class="kbgn2obeo"/><path class="fnb9a-75o"/>`,
		"fallback": "fxemoji:japanesesymbolforbeginner",
	});
}

export default Component;
