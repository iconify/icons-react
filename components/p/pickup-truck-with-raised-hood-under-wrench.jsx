import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku0ntlbrj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku0ntlbrj"/>`,
		"fallback": "pinhead:pickup-truck-with-raised-hood-under-wrench",
	});
}

export default Component;
