import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmmn7hb-y.css';
import '../../css/e/esmoz0bna.css';
import '../../css/b/bc79qqbow.css';
import '../../css/j/jtq_nybgm.css';
import '../../css/c/cj6sz9lag.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mmmn7hb-y"/><path class="esmoz0bna"/><path class="bc79qqbow"/><path class="jtq_nybgm"/><path class="cj6sz9lag"/></g>`,
		"fallback": "streamline-color:paint-palette",
	});
}

export default Component;
