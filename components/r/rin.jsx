import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0hziwb9d.css';
import '../../css/x/x47f5ib6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0hziwb9d"/><path class="x47f5ib6e"/>`,
		"fallback": "token:rin",
	});
}

export default Component;
