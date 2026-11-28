import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5r3rjbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5r3rjbeg"/>`,
		"fallback": "noviair-light:mail-question",
	});
}

export default Component;
