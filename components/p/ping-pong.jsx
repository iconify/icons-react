import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcbvs6dqg.css';
import '../../css/l/luj-d4blw.css';
import '../../css/c/c9zzvw0xs.css';
import '../../css/e/e712djb_x.css';
import '../../css/o/on0k5wc2e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wcbvs6dqg"/><path class="luj-d4blw"/><path class="c9zzvw0xs"/><path class="e712djb_x"/><path class="on0k5wc2e"/></g>`,
		"fallback": "fluent-emoji-flat:ping-pong",
	});
}

export default Component;
