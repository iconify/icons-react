import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bppap7_zo.css';
import '../../css/h/h_ij2h9ud.css';
import '../../css/v/vyi3yyb5k.css';
import '../../css/j/jhnb5sk1a.css';
import '../../css/o/omwlx-bya.css';
import '../../css/c/c2uqs3b5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bppap7_zo wm-k"/><path class="h_ij2h9ud wm-k"/><path class="vyi3yyb5k wm-k"/><path class="jhnb5sk1a wm-k"/><path class="omwlx-bya wm-k"/><path class="c2uqs3b5m wm-k"/></g>`,
		"fallback": "withicons-anime:playground",
	});
}

export default Component;
