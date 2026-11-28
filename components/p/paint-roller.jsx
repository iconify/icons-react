import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqut5_rjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqut5_rjc"/>`,
		"fallback": "noviair:paint-roller",
	});
}

export default Component;
