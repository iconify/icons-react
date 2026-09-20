import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b44m8kb1i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b44m8kb1i"/>`,
		"fallback": "streamline-color:text-style-flat",
	});
}

export default Component;
