import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu_n6gdgy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hu_n6gdgy"/>`,
		"fallback": "streamline:qr-code-remix",
	});
}

export default Component;
