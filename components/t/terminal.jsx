import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9kqyilop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l9kqyilop"/>`,
		"fallback": "griddy-icons:terminal",
	});
}

export default Component;
