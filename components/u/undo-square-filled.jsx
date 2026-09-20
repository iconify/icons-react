import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_u1qfr8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u_u1qfr8o"/>`,
		"fallback": "reicon:undo-square-filled",
	});
}

export default Component;
