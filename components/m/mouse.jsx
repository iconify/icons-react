import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp5tixd2n.css';

const viewBox = {"width":352,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp5tixd2n"/>`,
		"fallback": "ps:mouse",
	});
}

export default Component;
