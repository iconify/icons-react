import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv4biccwc.css';
import '../../css/o/oa67cbk0z.css';
import '../../css/v/v-i1hztch.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv4biccwc"/><path class="oa67cbk0z"/><path class="v-i1hztch"/>`,
		"fallback": "ion:social-usd-outline",
	});
}

export default Component;
