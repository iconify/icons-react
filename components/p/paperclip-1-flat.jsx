import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r88f92b7h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r88f92b7h"/>`,
		"fallback": "streamline-color:paperclip-1-flat",
	});
}

export default Component;
