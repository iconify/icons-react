import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9_-bpbqh.css';
import '../../css/u/uqe2vbmeo.css';
import '../../css/x/x7y684bgr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i9_-bpbqh"/><path class="uqe2vbmeo"/><path class="x7y684bgr"/></g>`,
		"fallback": "fluent-emoji-flat:new-moon-face",
	});
}

export default Component;
