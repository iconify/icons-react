import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/iybkyztnm.css';
import '../../css/y/ydp9b_bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="iybkyztnm"/><path class="ydp9b_bje"/></g>`,
		"fallback": "bitcoin-icons:keyboard-outline",
	});
}

export default Component;
