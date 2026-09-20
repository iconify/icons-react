import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb3s82fnv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb3s82fnv"/>`,
		"fallback": "subway:part-of-circle-3",
	});
}

export default Component;
