import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psrz9t_gi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psrz9t_gi"/>`,
		"fallback": "ci:square-help",
	});
}

export default Component;
