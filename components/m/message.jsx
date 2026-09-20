import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr_-56d4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr_-56d4i"/>`,
		"fallback": "uil:message",
	});
}

export default Component;
