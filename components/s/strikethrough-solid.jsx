import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-b07z5rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-b07z5rd"/>`,
		"fallback": "iconaut:strikethrough-solid",
	});
}

export default Component;
