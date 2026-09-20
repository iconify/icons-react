import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgqfmz5hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgqfmz5hh"/>`,
		"fallback": "token:stosmo",
	});
}

export default Component;
