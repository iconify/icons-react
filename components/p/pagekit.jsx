import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsmt7b2xl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsmt7b2xl"/>`,
		"fallback": "thesvg-color:pagekit",
	});
}

export default Component;
