import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3k1-4h4j.css';
import '../../css/k/k0n5xoqvf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3k1-4h4j"/><path class="k0n5xoqvf"/>`,
		"fallback": "garden:new-window-fill-12",
	});
}

export default Component;
