import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m08s8b8qe.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m08s8b8qe"/>`,
		"fallback": "oi:sort-descending",
	});
}

export default Component;
