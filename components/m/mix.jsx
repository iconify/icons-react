import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t82njy5nz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t82njy5nz"/>`,
		"fallback": "thesvg-color:mix",
	});
}

export default Component;
