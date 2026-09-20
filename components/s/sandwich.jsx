import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr3eht-vx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr3eht-vx"/>`,
		"fallback": "temaki:sandwich",
	});
}

export default Component;
