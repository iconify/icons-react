import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybm3768ti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybm3768ti"/>`,
		"fallback": "withicons:message-square-x-solid",
	});
}

export default Component;
