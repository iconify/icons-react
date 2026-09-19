import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0fzwvb4b.css';
import '../../css/l/l4n1o8blm.css';
import '../../css/s/suffk5-7v.css';
import '../../css/x/xg922ebyc.css';
import '../../css/s/s_p243b7j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l0fzwvb4b"/><path class="l4n1o8blm"/><path class="suffk5-7v"/><path class="xg922ebyc"/><path class="s_p243b7j"/></g>`,
		"fallback": "fluent-emoji-flat:movie-camera",
	});
}

export default Component;
