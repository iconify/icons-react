import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/s_a8gd0ao.css';
import '../../css/e/e484agbra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="s_a8gd0ao"/><path class="e484agbra"/></g>`,
		"fallback": "bitcoin-icons:lock-outline",
	});
}

export default Component;
