import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhs780b5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhs780b5r"/>`,
		"fallback": "noviair:send-check",
	});
}

export default Component;
