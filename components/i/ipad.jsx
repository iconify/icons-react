import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2o1ppbhj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2o1ppbhj"/>`,
		"fallback": "ion:ipad",
	});
}

export default Component;
