import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-k0ckb_g.css';
import '../../css/v/v13bn1brl.css';
import '../../css/t/tvhq1ibax.css';
import '../../css/o/o5uu1xyej.css';
import '../../css/i/iklvdsbxr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-k0ckb_g"/><path class="v13bn1brl"/><path class="tvhq1ibax"/><path class="o5uu1xyej"/><path class="iklvdsbxr"/></g>`,
		"fallback": "fluent-emoji-flat:two-hump-camel",
	});
}

export default Component;
