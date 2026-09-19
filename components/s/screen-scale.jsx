import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/df4av9boa.css';
import '../../css/u/u0qyy6b6u.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="df4av9boa"/><path class="u0qyy6b6u"/></g>`,
		"fallback": "si-glyph:screen-scale",
	});
}

export default Component;
