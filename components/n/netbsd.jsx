import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eelz5c2dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eelz5c2dj"/>`,
		"fallback": "thesvg-color:netbsd",
	});
}

export default Component;
