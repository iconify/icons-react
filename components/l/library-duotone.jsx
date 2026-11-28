import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx9z9xbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx9z9xbhj primary"/>`,
		"fallback": "iconaut:library-duotone",
	});
}

export default Component;
