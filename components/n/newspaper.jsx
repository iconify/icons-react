import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qpun4616z.css';
import '../../css/w/wu6jc3b7c.css';
import '../../css/y/y5xiktb0u.css';
import '../../css/w/wpztunb3a.css';
import '../../css/l/l4ok05b1o.css';
import '../../css/m/m-tk-vb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="qpun4616z"/><path class="wu6jc3b7c"/><path class="wm-shine y5xiktb0u"/><path class="wm-k wpztunb3a"/><path class="l4ok05b1o wm-a"/><path class="m-tk-vb8r wm-deco"/></g>`,
		"fallback": "withicons-kawaii:newspaper",
	});
}

export default Component;
