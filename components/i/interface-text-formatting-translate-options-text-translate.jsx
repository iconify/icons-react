import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp7mnabuu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp7mnabuu"/>`,
		"fallback": "streamline:interface-text-formatting-translate-options-text-translate",
	});
}

export default Component;
