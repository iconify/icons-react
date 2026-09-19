import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fp7wsnbnf.css';
import '../../css/l/l_taszo0z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fp7wsnbnf"/><path class="l_taszo0z"/></g>`,
		"fallback": "fluent-emoji-flat:peanuts",
	});
}

export default Component;
