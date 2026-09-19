import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zxkzwmu0w.css';
import '../../css/r/rfucequyu.css';
import '../../css/q/qor4xqb1b.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zxkzwmu0w"/><path class="rfucequyu"/><ellipse class="qor4xqb1b"/></g>`,
		"fallback": "fad:slider-round-3",
	});
}

export default Component;
