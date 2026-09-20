import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnoc0t9do.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnoc0t9do"/>`,
		"fallback": "mdi:seat-legroom-extra",
	});
}

export default Component;
