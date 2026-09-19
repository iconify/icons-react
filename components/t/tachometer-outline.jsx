import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g83c24bxt.css';
import '../../css/y/yt3sru-9s.css';
import '../../css/s/sw2oztbzt.css';
import '../../css/o/o8mkkrb1z.css';
import '../../css/l/l4rb_ediz.css';
import '../../css/g/glvkoem1w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g83c24bxt"/><path clip-rule="evenodd" class="yt3sru-9s"/><path class="sw2oztbzt"/><path clip-rule="evenodd" class="o8mkkrb1z"/><path clip-rule="evenodd" class="l4rb_ediz"/><path class="glvkoem1w"/></g>`,
		"fallback": "glyphs:tachometer-outline",
	});
}

export default Component;
