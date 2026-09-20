import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy54agbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy54agbxn"/>`,
		"fallback": "mynaui:sun-snow-solid",
	});
}

export default Component;
