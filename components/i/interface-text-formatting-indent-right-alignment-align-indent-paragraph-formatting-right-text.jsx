import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqwid4b-o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqwid4b-o"/>`,
		"fallback": "streamline:interface-text-formatting-indent-right-alignment-align-indent-paragraph-formatting-right-text",
	});
}

export default Component;
