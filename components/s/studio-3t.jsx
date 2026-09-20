import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi2gyzb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi2gyzb_u"/>`,
		"fallback": "thesvg:studio-3t",
	});
}

export default Component;
