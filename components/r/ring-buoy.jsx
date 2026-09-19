import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/se00zpnsh.css';
import '../../css/c/cyd1o9bus.css';
import '../../css/k/kqz3dbcpw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="se00zpnsh"/><path class="cyd1o9bus"/><path class="kqz3dbcpw"/></g>`,
		"fallback": "fluent-emoji-flat:ring-buoy",
	});
}

export default Component;
