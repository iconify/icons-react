import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db0cu2b-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db0cu2b-j"/>`,
		"fallback": "hugeicons:list-filter-plus",
	});
}

export default Component;
