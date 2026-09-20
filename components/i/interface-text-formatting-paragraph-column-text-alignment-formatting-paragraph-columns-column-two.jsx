import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1o_7ksyo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1o_7ksyo"/>`,
		"fallback": "streamline:interface-text-formatting-paragraph-column-text-alignment-formatting-paragraph-columns-column-two",
	});
}

export default Component;
