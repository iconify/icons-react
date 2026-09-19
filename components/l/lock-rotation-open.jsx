import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgw0qblsg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgw0qblsg"/>`,
		"fallback": "f7:lock-rotation-open",
	});
}

export default Component;
