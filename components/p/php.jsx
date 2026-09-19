import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8h815ehx.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8h815ehx"/>`,
		"fallback": "whh:php",
	});
}

export default Component;
