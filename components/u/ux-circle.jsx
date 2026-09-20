import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1di_8b1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f1di_8b1q"/>`,
		"fallback": "majesticons:ux-circle",
	});
}

export default Component;
