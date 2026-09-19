import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brc0m0l9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brc0m0l9y"/>`,
		"fallback": "hugeicons:map-plus",
	});
}

export default Component;
