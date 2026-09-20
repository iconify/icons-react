import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jagb8r3zf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jagb8r3zf"/>`,
		"fallback": "uil:silent-squint",
	});
}

export default Component;
