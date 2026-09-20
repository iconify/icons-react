import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1o7eg5_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1o7eg5_n"/>`,
		"fallback": "thesvg-color:opnsense",
	});
}

export default Component;
