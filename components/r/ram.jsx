import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbp5r2bjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbp5r2bjt"/>`,
		"fallback": "token:ram",
	});
}

export default Component;
