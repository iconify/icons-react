import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beg4g-64e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beg4g-64e"/>`,
		"fallback": "hugeicons:list-view",
	});
}

export default Component;
