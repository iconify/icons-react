import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnz56wbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jnz56wbig"/>`,
		"fallback": "solar:sort-from-top-to-bottom-bold",
	});
}

export default Component;
