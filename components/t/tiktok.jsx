import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhjytlb0n.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhjytlb0n"/>`,
		"fallback": "fa6-brands:tiktok",
	});
}

export default Component;
