import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f94x20bnf.css';
import '../../css/u/u7syfkble.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f94x20bnf"/><path class="u7syfkble"/>`,
		"fallback": "ooui:reference-existing-rtl",
	});
}

export default Component;
