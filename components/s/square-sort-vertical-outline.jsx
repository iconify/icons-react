import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai1gpwbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ai1gpwbus"/>`,
		"fallback": "solar:square-sort-vertical-outline",
	});
}

export default Component;
