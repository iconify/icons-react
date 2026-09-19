import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4s7832oy.css';
import '../../css/a/alcoyobza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4s7832oy"/><path clip-rule="evenodd" class="alcoyobza"/>`,
		"fallback": "basil:toggle-on-outline",
	});
}

export default Component;
