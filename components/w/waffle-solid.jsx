import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8h64tafo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8h64tafo"/>`,
		"fallback": "iconaut:waffle-solid",
	});
}

export default Component;
