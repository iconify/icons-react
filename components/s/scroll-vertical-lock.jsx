import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx_0q1bgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx_0q1bgt"/>`,
		"fallback": "mdi:scroll-vertical-lock",
	});
}

export default Component;
