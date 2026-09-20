import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drv6t-b4e.css';
import '../../css/j/jnwm9c43p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="drv6t-b4e"/><path class="jnwm9c43p"/>`,
		"fallback": "token:theta",
	});
}

export default Component;
