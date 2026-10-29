import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqvq0wb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqvq0wb0u"/>`,
		"fallback": "withicons:shopping-bag-solid",
	});
}

export default Component;
