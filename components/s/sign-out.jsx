import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hc5-yb99u.css';
import '../../css/f/f4rs_qt0r.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hc5-yb99u"/><path class="f4rs_qt0r"/></g>`,
		"fallback": "si-glyph:sign-out",
	});
}

export default Component;
