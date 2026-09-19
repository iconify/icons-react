import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/u/uuk2rjzmw.css';
import '../../css/u/uhfgxvb8v.css';
import '../../css/i/ij1i4h4kd.css';
import '../../css/f/fnxhj6rao.css';
import '../../css/w/wg9szgb1j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="uuk2rjzmw"/><path class="uhfgxvb8v"/><path class="ij1i4h4kd"/><path class="fnxhj6rao"/><path class="wg9szgb1j"/></g>`,
		"fallback": "fluent-emoji-flat:thinking-face",
	});
}

export default Component;
