import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu0ey4b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu0ey4b_n"/>`,
		"fallback": "iconoir:ruler-arrows",
	});
}

export default Component;
