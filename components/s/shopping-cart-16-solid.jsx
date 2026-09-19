import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqunbxb7a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqunbxb7a"/>`,
		"fallback": "heroicons:shopping-cart-16-solid",
	});
}

export default Component;
