import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_6yn6bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_6yn6bxk"/>`,
		"fallback": "iconaut:sparkle-solid",
	});
}

export default Component;
