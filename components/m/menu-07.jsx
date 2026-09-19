import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzl52293y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzl52293y"/>`,
		"fallback": "hugeicons:menu-07",
	});
}

export default Component;
