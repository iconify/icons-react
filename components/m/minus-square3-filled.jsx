import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzr5fjb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzr5fjb7i"/>`,
		"fallback": "reicon:minus-square3-filled",
	});
}

export default Component;
