import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxciqpbda.css';
import '../../css/f/fne6a9bsp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="zxciqpbda"/><path class="fne6a9bsp"/>`,
		"fallback": "ion:laptop-outline",
	});
}

export default Component;
