import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhnz1-bko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhnz1-bko"/>`,
		"fallback": "mingcute:tag-line",
	});
}

export default Component;
