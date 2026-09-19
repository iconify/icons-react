import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kcu1bjbdy.css';
import '../../css/m/mcqy7wbbq.css';
import '../../css/c/c9hgkzb7l.css';
import '../../css/q/qlowtstmq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kcu1bjbdy"/><path clip-rule="evenodd" class="mcqy7wbbq"/><path class="c9hgkzb7l"/><path clip-rule="evenodd" class="qlowtstmq"/></g>`,
		"fallback": "glyphs:receipt-outline",
	});
}

export default Component;
