import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia7l2rsyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia7l2rsyj"/>`,
		"fallback": "thesvg:medium",
	});
}

export default Component;
