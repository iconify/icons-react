import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t88qepbbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t88qepbbx"/>`,
		"fallback": "iconaut:list-pin-solid",
	});
}

export default Component;
