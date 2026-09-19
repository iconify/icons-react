import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvh2kgbkd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvh2kgbkd"/>`,
		"fallback": "fa6-solid:reply",
	});
}

export default Component;
