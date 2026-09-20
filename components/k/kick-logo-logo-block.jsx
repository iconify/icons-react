import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1841vb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h1841vb1o"/>`,
		"fallback": "streamline-logos:kick-logo-logo-block",
	});
}

export default Component;
