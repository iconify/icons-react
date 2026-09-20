import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-8x0zb0n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-8x0zb0n"/>`,
		"fallback": "ooui:previous-ltr",
	});
}

export default Component;
