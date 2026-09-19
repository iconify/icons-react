import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h36wngbkh.css';
import '../../css/b/b29c1cwoz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h36wngbkh"/><path class="b29c1cwoz"/>`,
		"fallback": "ion:water-outline",
	});
}

export default Component;
