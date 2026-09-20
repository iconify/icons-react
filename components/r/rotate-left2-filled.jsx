import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q75n7ib4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q75n7ib4o"/>`,
		"fallback": "reicon:rotate-left2-filled",
	});
}

export default Component;
