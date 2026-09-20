import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a16dl8ikz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a16dl8ikz"/>`,
		"fallback": "thesvg-color:studio-3t",
	});
}

export default Component;
