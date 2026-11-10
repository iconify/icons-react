import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k21iw6bee.css';
import '../../css/j/jjlr1hpti.css';
import '../../css/d/ddcup9v4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k21iw6bee"/><path class="jjlr1hpti"/><path class="ddcup9v4w"/></g>`,
		"fallback": "andrsrxn:panel-top-open",
	});
}

export default Component;
