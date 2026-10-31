import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yn_evmb4f.css';
import '../../css/i/i8yub2giw.css';
import '../../css/r/r7-z26tjo.css';
import '../../css/b/b1gtgjk2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow yn_evmb4f"/><path class="i8yub2giw wm-shadow"/><path class="r7-z26tjo"/><path class="b1gtgjk2j"/></g>`,
		"fallback": "withicons-brutal:pen-line",
	});
}

export default Component;
