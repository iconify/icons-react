import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jspn7gvku.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jspn7gvku"/>`,
		"fallback": "streamline:markdown-circle-programming-remix",
	});
}

export default Component;
