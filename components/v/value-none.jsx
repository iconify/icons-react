import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6448q3ag.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6448q3ag"/>`,
		"fallback": "radix-icons:value-none",
	});
}

export default Component;
