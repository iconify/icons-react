import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6-ntejpf.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6-ntejpf"/>`,
		"fallback": "fa6-brands:viadeo-square",
	});
}

export default Component;
