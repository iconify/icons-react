import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxbq9ib_c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxbq9ib_c"/>`,
		"fallback": "ion:ios-analytics",
	});
}

export default Component;
