import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpne1_b3z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpne1_b3z"/>`,
		"fallback": "heroicons-solid:sort-ascending",
	});
}

export default Component;
