import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rmp5hgbqp.css';
import '../../css/d/dfbuaacdd.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(4)" class="n1lsf0bnc"><ellipse class="rmp5hgbqp"/><path class="dfbuaacdd"/></g>`,
		"fallback": "si-glyph:ipod",
	});
}

export default Component;
