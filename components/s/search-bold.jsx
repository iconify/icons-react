import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oynu7p7ta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oynu7p7ta"/>`,
		"fallback": "iconamoon:search-bold",
	});
}

export default Component;
