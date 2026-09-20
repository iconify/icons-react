import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmpmlbc2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmpmlbc2e"/>`,
		"fallback": "thesvg-color:penny",
	});
}

export default Component;
