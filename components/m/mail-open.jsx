import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/j0bnbk9rx.css';
import '../../css/s/sxauu5dml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="j0bnbk9rx"/><path class="sxauu5dml"/></g>`,
		"fallback": "matita:mail-open",
	});
}

export default Component;
