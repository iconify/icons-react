import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xo1a-ac-w.css';
import '../../css/x/xsnlrxbht.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xo1a-ac-w"/><path class="xsnlrxbht"/></g>`,
		"fallback": "fluent-emoji-flat:raised-hand-dark",
	});
}

export default Component;
