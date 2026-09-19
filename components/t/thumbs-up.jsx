import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qrz_4ll6b.css';
import '../../css/a/a1ux2ub4t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qrz_4ll6b"/><path class="a1ux2ub4t"/></g>`,
		"fallback": "fluent-emoji-flat:thumbs-up",
	});
}

export default Component;
