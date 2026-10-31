import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4qw8rbyi.css';
import '../../css/x/xosvhbc5x.css';
import '../../css/c/c37hzbbsc.css';
import '../../css/b/b4n_pebcp.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x4qw8rbyi"/><path class="xosvhbc5x"/><path class="c37hzbbsc"/><path class="b4n_pebcp"/></g>`,
		"fallback": "cif:mu",
	});
}

export default Component;
