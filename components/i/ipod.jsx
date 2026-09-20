import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgxuvzn0l.css';
import '../../css/j/jg041zb4w.css';
import '../../css/v/vwt_w_b-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kgxuvzn0l"/><path class="jg041zb4w"/><path class="vwt_w_b-u"/></g>`,
		"fallback": "tdesign:ipod",
	});
}

export default Component;
