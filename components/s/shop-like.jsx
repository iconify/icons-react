import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy6etub7n.css';
import '../../css/r/rumeyobvd.css';
import '../../css/r/roxb9ubql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy6etub7n"/><path class="rumeyobvd"/><path class="roxb9ubql"/>`,
		"fallback": "streamline-freehand:shop-like",
	});
}

export default Component;
