import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_2p8h9at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_2p8h9at"/>`,
		"fallback": "reicon:scribble",
	});
}

export default Component;
