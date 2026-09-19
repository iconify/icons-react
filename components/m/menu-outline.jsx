import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjh0_9b7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjh0_9b7k"/>`,
		"fallback": "famicons:menu-outline",
	});
}

export default Component;
