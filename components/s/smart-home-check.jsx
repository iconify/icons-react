import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhj959bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhj959bcp"/>`,
		"fallback": "noviair:smart-home-check",
	});
}

export default Component;
