import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vty8qkbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vty8qkbpx"/>`,
		"fallback": "withicons:waves-solid",
	});
}

export default Component;
