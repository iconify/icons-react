import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpzq2jbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpzq2jbyt"/>`,
		"fallback": "mdi:puzzle-remove-outline",
	});
}

export default Component;
