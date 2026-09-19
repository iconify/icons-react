import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y10l5hgkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y10l5hgkt"/>`,
		"fallback": "iconamoon:sign-plus-square-thin",
	});
}

export default Component;
