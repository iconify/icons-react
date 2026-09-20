import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc66l36zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc66l36zn"/>`,
		"fallback": "thesvg-color:tui",
	});
}

export default Component;
