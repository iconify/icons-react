import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlzp8hbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlzp8hbrf"/>`,
		"fallback": "thesvg-color:stack-overflow",
	});
}

export default Component;
