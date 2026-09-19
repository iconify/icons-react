import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqavturbc.css';
import '../../css/q/qnfai9ogm.css';
import '../../css/a/at1cxv7wl.css';
import '../../css/s/s9wn5-b0r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aqavturbc"/><path class="qnfai9ogm"/><path class="at1cxv7wl"/><path class="s9wn5-b0r"/></g>`,
		"fallback": "fluent-emoji-flat:t-shirt",
	});
}

export default Component;
