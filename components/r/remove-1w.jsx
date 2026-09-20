import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn765ki5q.css';
import '../../css/y/yz2v9sbep.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn765ki5q"/><path class="yz2v9sbep"/>`,
		"fallback": "iwwa:remove-1w",
	});
}

export default Component;
