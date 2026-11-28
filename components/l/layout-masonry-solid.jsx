import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi6h-tbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi6h-tbcx"/>`,
		"fallback": "iconaut:layout-masonry-solid",
	});
}

export default Component;
