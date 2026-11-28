import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn7f3nbsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn7f3nbsg"/>`,
		"fallback": "noviair:user-circle",
	});
}

export default Component;
