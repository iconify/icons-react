import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryoop_6uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryoop_6uv"/>`,
		"fallback": "iconaut:surfboard-solid",
	});
}

export default Component;
