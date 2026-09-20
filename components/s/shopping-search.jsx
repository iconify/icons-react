import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-z_8uu5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-z_8uu5o"/>`,
		"fallback": "mdi:shopping-search",
	});
}

export default Component;
