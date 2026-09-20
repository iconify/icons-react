import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mulugybty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mulugybty"/>`,
		"fallback": "thesvg-color:luau",
	});
}

export default Component;
