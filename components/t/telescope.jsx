import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_mia5z_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_mia5z_l"/>`,
		"fallback": "noviair:telescope",
	});
}

export default Component;
