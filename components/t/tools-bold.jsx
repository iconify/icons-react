import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ds2fwszxt.css';
import '../../css/e/ey2gg78wq.css';
import '../../css/o/oaw0c1bnn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ds2fwszxt"/><path class="ey2gg78wq"/><path class="oaw0c1bnn"/></g>`,
		"fallback": "glyphs:tools-bold",
	});
}

export default Component;
