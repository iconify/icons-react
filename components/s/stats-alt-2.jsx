import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx9lqb31c.css';
import '../../css/i/isdp0_b-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx9lqb31c"/><path clip-rule="evenodd" class="isdp0_b-u"/>`,
		"fallback": "gridicons:stats-alt-2",
	});
}

export default Component;
