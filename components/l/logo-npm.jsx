import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8zw34-dy.css';
import '../../css/d/d84_2zbcn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8zw34-dy"/><path class="d84_2zbcn"/>`,
		"fallback": "famicons:logo-npm",
	});
}

export default Component;
