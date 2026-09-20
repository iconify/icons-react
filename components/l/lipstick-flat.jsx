import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a5wwwq5kc.css';
import '../../css/s/s0uiriogt.css';
import '../../css/f/fstrm2tym.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a5wwwq5kc"/><path clip-rule="evenodd" class="s0uiriogt"/><path clip-rule="evenodd" class="fstrm2tym"/></g>`,
		"fallback": "streamline-color:lipstick-flat",
	});
}

export default Component;
